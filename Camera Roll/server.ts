import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Initialize Gemini client lazily or directly.
// The SDK set_up ensures GEMINI_API_KEY is available.
const apiKey = process.env.GEMINI_API_KEY;

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

// AI Customer Support Chatbot API
app.post("/api/chat", async (req, res) => {
  try {
    const { message, rules, chatHistory, language } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    if (!ai) {
      // Return a simulated, realistic response if API Key is missing for some reason
      return res.json({
        text: `[Demo Mode - API Key not found] Thank you for your inquiry: "${message}". Business Rules set: "${rules || 'None'}". Please configure the GEMINI_API_KEY in Settings > Secrets to enable live AI responses.`,
        isDemo: true
      });
    }

    const systemInstruction = `You are a professional, polite, and extremely helpful 24/7 e-commerce customer support chatbot named "Veto Assistant" for an online business.
The store owner has configured the following custom Business Rules & Project Tasks for your operations:
---
${rules || "Greet the user warmly, explain that Veto is an elegant e-commerce management platform, and help them with standard business support inquiries."}
---

Your response MUST:
1. Adhere strictly to the business rules and instructions provided above.
2. If the user's question is not directly covered by the rules, be polite, helpful, and offer to forward their query to the store manager.
3. Match the conversation language: the current interface language selected is "${language || 'en'}". Respond in that language (English, Arabic/RTL, or French) naturally and fluently.
4. Keep the response concise, clear, and professional. Avoid markdown formatting like headers or large code blocks, but bullet points or bold text are fine if helpful.`;

    // Map history to contents structure required by the SDK or pass as systemInstruction + messages
    // Let's use simple prompt construction or chats to keep it robust and predictable
    const prompt = `Customer: ${message}`;
    
    // Construct contents
    const contents: any[] = [];
    if (chatHistory && Array.isArray(chatHistory)) {
      // Limit to last 6 messages to avoid token issues and keep it fast
      const recentHistory = chatHistory.slice(-6);
      recentHistory.forEach((h: any) => {
        contents.push({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.text }]
        });
      });
    }
    
    contents.push({
      role: 'user',
      parts: [{ text: prompt }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    const replyText = response.text || "I am here to help, but I couldn't generate a response. Please try again.";
    return res.json({ text: replyText });

  } catch (error: any) {
    console.error("Gemini API Error in /api/chat:", error);
    return res.status(500).json({ 
      error: "An error occurred while communicating with the AI. Please try again later.",
      details: error?.message || String(error)
    });
  }
});

// Google OAuth 2.0 Callback Page
app.get(["/auth/callback", "/auth/callback/"], (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Connecting to Veto...</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
          background-color: #F8F9FA;
          color: #1A1F36;
        }
        .card {
          text-align: center;
          padding: 2.5rem;
          border-radius: 1.5rem;
          box-shadow: 0 10px 25px -5px rgba(98, 0, 238, 0.1), 0 8px 10px -6px rgba(98, 0, 238, 0.05);
          background: white;
          max-width: 360px;
          border: 1px solid #E2E8F0;
        }
        .spinner {
          border: 4px solid #F3E5F5;
          border-top: 4px solid #6200EE;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s cubic-bezier(0.5, 0.1, 0.4, 0.9) infinite;
          margin: 0 auto 1.5rem auto;
        }
        h2 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
          color: #6200EE;
        }
        p {
          font-size: 0.875rem;
          color: #4A5568;
          line-height: 1.5;
          margin: 0;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="spinner"></div>
        <h2>Veto Secure Handshake</h2>
        <p>Completing authentication. This popup will close automatically in a moment.</p>
      </div>
      <script>
        function parseJwt(token) {
          try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.parse(jsonPayload);
          } catch (e) {
            return null;
          }
        }

        // Parse hash fragment (from Google implicit flow)
        const hash = window.location.hash.substring(1);
        const hashParams = new URLSearchParams(hash);
        const idToken = hashParams.get('id_token');
        
        // Parse search query
        const queryParams = new URLSearchParams(window.location.search);
        const error = queryParams.get('error') || hashParams.get('error');

        if (idToken) {
          const payload = parseJwt(idToken);
          if (window.opener) {
            // Send OAuth success event and profile details to the main Veto tab
            window.opener.postMessage({ 
              type: 'OAUTH_AUTH_SUCCESS', 
              profile: {
                name: payload.name || "Bella Hassan",
                email: payload.email || "bellaoerhassan008@gmail.com",
                picture: payload.picture || "",
                initials: (payload.given_name?.[0] || '') + (payload.family_name?.[0] || '') || payload.name?.slice(0, 2).toUpperCase() || "BH"
              }
            }, '*');
            setTimeout(() => {
              window.close();
            }, 600);
          } else {
            document.querySelector('p').innerText = "Veto app was not found in parent window context.";
          }
        } else if (error) {
          if (window.opener) {
            window.opener.postMessage({ type: 'OAUTH_AUTH_FAILURE', error: error }, '*');
            setTimeout(() => {
              window.close();
            }, 1000);
          } else {
            document.querySelector('p').innerText = "An error occurred: " + error;
          }
        } else {
          // Fallback if accessed directly without any parameters
          setTimeout(() => {
            if (window.opener) {
              window.opener.postMessage({ type: 'OAUTH_AUTH_STATUS', status: 'idle' }, '*');
            }
          }, 1500);
        }
      </script>
    </body>
    </html>
  `);
});

// Configure Vite middleware or static serving
async function configureServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite HMR...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Veto server is actively listening on http://0.0.0.0:${PORT}`);
  });
}

configureServer().catch((err) => {
  console.error("Failed to start full-stack Veto server:", err);
});
