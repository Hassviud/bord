export type Language = 'en' | 'ar' | 'fr';

export type SidebarSection = 'dashboard' | 'ai-support' | 'analytics' | 'settings';

export interface AppIntegration {
  id: string;
  name: string;
  icon: string;
  status: 'connected' | 'disconnected';
  description: string;
  placeholder: string;
  apiUrl?: string;
  apiToken?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export interface BusinessRule {
  title: string;
  content: string;
}
