import { Language } from "./types";

export interface TranslationDictionary {
  dir: 'ltr' | 'rtl';
  landing: {
    title: string;
    subtitle: string;
    heroBadge: string;
    loginHeader: string;
    loginSub: string;
    emailLabel: string;
    passwordLabel: string;
    rememberMe: string;
    forgotPassword: string;
    signInBtn: string;
    googleSignIn: string;
    featuresHeader: string;
    featuresSub: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    privacyHeader: string;
    privacyText: string;
    coreValuesHeader: string;
    coreValue1Title: string;
    coreValue1Desc: string;
    coreValue2Title: string;
    coreValue2Desc: string;
    coreValue3Title: string;
    coreValue3Desc: string;
    footerRights: string;
  };
  dashboard: {
    welcome: string;
    overview: string;
    aiAgentTab: string;
    integrationsTab: string;
    settingsTab: string;
    signOut: string;
    statusActive: string;
    statusInactive: string;
    integrationsHeader: string;
    integrationsSub: string;
    connectBtn: string;
    disconnectBtn: string;
    configureBtn: string;
    integrationFormToken: string;
    integrationFormUrl: string;
    saveConfigBtn: string;
    aiTrainingHeader: string;
    aiTrainingSub: string;
    textareaPlaceholder: string;
    chatbotHeader: string;
    chatbotSub: string;
    chatPlaceholder: string;
    chatSendBtn: string;
    testRulesAlert: string;
    quickStats: string;
    statActiveChannels: string;
    statTotalChats: string;
    statResponseRate: string;
    statSatisfaction: string;
    themeLabel: string;
    themeLight: string;
    themeDark: string;
    storeSettingsHeader: string;
    storeNameLabel: string;
    storeEmailLabel: string;
    saveSettingsBtn: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    dir: 'ltr',
    landing: {
      title: 'E-commerce Management, Redefined.',
      subtitle: 'Meet Veto — the high-performance SaaS engine. Deploy continuous AI support bots, unify messaging APIs, and scale your brand with complete privacy compliance.',
      heroBadge: 'VETO PLATFORM v1.4',
      loginHeader: 'Welcome to Veto',
      loginSub: 'Sign in to orchestrate your storefront operations.',
      emailLabel: 'Business Email',
      passwordLabel: 'Access Key (Password)',
      rememberMe: 'Remember terminal key',
      forgotPassword: 'Reset credentials?',
      signInBtn: 'Authenticate Securely',
      googleSignIn: 'Continue with Google Account',
      featuresHeader: 'Platform Capabilities',
      featuresSub: 'Engineered for premium commerce. Minimal friction, maximal scaling.',
      feature1Title: 'Omnichannel Message Gateway',
      feature1Desc: 'Unify client communications by bridging WhatsApp, Telegram, and Messenger APIs directly into a single workspace panel.',
      feature2Title: 'Adaptive Customer AI Agent',
      feature2Desc: 'Train a sovereign, context-aware chatbot based on your custom business parameters and policies. Resolves 92% of tickets instantly.',
      feature3Title: 'Absolute Zero-Leak Privacy',
      feature3Desc: 'Fully compliant with GDPR and CCPA protocols. Your proprietary models, e-commerce data, and customer chats are completely insulated.',
      privacyHeader: 'Strict Privacy Protocol',
      privacyText: 'At Veto, we guarantee that your training datasets, transaction histories, and customer interactions are encrypted in transit and at rest. We never sell, lease, or utilize your store data to train common models. You maintain 100% data sovereignty.',
      coreValuesHeader: 'Architectural Invariants',
      coreValue1Title: 'Zero Middleware Lag',
      coreValue1Desc: 'Optimized server-side operations for instant chat rendering and database updates.',
      coreValue2Title: 'Absolute Autonomy',
      coreValue2Desc: 'Empower your customer support to run autonomously 24/7 without developer intervention.',
      coreValue3Title: 'Cryptographic Security',
      coreValue3Desc: 'Industry-standard auth layers and role-based permissions safeguard your digital pipeline.',
      footerRights: 'All rights reserved. Veto E-Commerce Technologies Inc.',
    },
    dashboard: {
      welcome: 'Welcome back, Commander',
      overview: 'System Command Center',
      aiAgentTab: 'AI Support Studio',
      integrationsTab: 'Messaging Gateways',
      settingsTab: 'Store Config',
      signOut: 'Terminate Session',
      statusActive: 'Connected',
      statusInactive: 'Offline',
      integrationsHeader: 'Omnichannel API Integrations',
      integrationsSub: 'Establish secure connections with messaging networks to delegate client chats directly to your trained Veto AI agent.',
      connectBtn: 'Authorize Channel',
      disconnectBtn: 'Disconnect',
      configureBtn: 'Edit Endpoint',
      integrationFormToken: 'API Access Token / Secret Key',
      integrationFormUrl: 'Webhook Ingress URL',
      saveConfigBtn: 'Apply Credentials',
      aiTrainingHeader: 'AI Customer Support & Task Management',
      aiTrainingSub: 'State the custom rules, discount policies, shipping tables, or conversational tone. Your AI Agent continuously learns from this prompt in real time.',
      textareaPlaceholder: 'Example:\n- You are "Veto Bot", representing "Elegant Soles" shoe boutique.\n- Offer discount code "SHOE10" (10% off) for any shipping delay questions.\n- Refund policy: standard 30 days. No returns on clearance products.\n- Shipping cost: $5 flat rate. Free on orders above $100.',
      chatbotHeader: 'Live 24/7 AI Customer Simulator',
      chatbotSub: 'Test your custom business rules in real time. Submit queries as a prospective customer to verify responses.',
      chatPlaceholder: 'Type a customer inquiry (e.g. "Is shipping free?") and hit Enter...',
      chatSendBtn: 'Send Message',
      testRulesAlert: 'Your business rules are active. The simulator below leverages Gemini 3.5 Flash to generate responses adhering precisely to your guidelines.',
      quickStats: 'Operational Metrics',
      statActiveChannels: 'Active Channels',
      statTotalChats: 'Queries Resolved',
      statResponseRate: 'Avg. Response Time',
      statSatisfaction: 'Satisfaction Index',
      themeLabel: 'Interface Atmosphere',
      themeLight: 'Pristine Light',
      themeDark: 'Obsidian Purple',
      storeSettingsHeader: 'E-commerce Enterprise Metadata',
      storeNameLabel: 'Brand/Store Title',
      storeEmailLabel: 'Escalation Support Email',
      saveSettingsBtn: 'Save Enterprise Settings',
    }
  },
  ar: {
    dir: 'rtl',
    landing: {
      title: 'إعادة تعريف إدارة التجارة الإلكترونية.',
      subtitle: 'اكتشف Veto — محرك الـ SaaS عالي الأداء. قم بتثبيت برمجيات الدعم الذكي المستمر، ووحد قنوات الاتصال، واحمِ بياناتك بخصوصية مطلقة.',
      heroBadge: 'منصة فيتو الإصدار 1.4',
      loginHeader: 'مرحباً بك في فيتو',
      loginSub: 'سجل دخولك لتنظيم عمليات متجرك الرقمي.',
      emailLabel: 'البريد الإلكتروني للعمل',
      passwordLabel: 'رمز المرور الآمن',
      rememberMe: 'حفظ رمز الوصول',
      forgotPassword: 'إعادة تعيين الهوية؟',
      signInBtn: 'تحقق من الهوية بشكل آمن',
      googleSignIn: 'المتابعة باستخدام حساب جوجل',
      featuresHeader: 'قدرات المنصة الأساسية',
      featuresSub: 'مصممة خصيصاً لتجارة إلكترونية راقية. أقصى درجات النمو بأقل مجهود.',
      feature1Title: 'بوابة الرسائل الموحدة',
      feature1Desc: 'وحّد اتصالات عملائك من خلال ربط واجهات برمجة تطبيقات واتساب، وتيليجرام، وماسنجر في لوحة تحكم واحدة.',
      feature2Title: 'وكيل دعم ذكي متكيف',
      feature2Desc: 'درب روبوت محادثة سيادي يفهم السياق بناءً على قواعد عملك المخصصة. يحل 92% من الاستفسارات فوراً.',
      feature3Title: 'خصوصية مطلقة بلا تسريبات',
      feature3Desc: 'متوافق تماماً مع بروتوكولات GDPR و CCPA. بيانات تجارتك ومحادثات عملائك معزولة ومحمية بالكامل.',
      privacyHeader: 'بروتوكول الخصوصية الصارم',
      privacyText: 'في فيتو، نضمن تشفير بيانات تدريب الذكاء الاصطناعي، وتاريخ المعاملات، وتفاعلات العملاء بالكامل أثناء النقل وحالة الثبات. لا نستخدم بيانات متجرك أبداً لتدريب النماذج العامة. أنت المالك الوحيد لبياناتك بنسبة 100%.',
      coreValuesHeader: 'ثوابت معمارية',
      coreValue1Title: 'سرعة استجابة فائقة',
      coreValue1Desc: 'عمليات معالجة خادمة محسّنة لعرض المحادثات وتحديث قواعد البيانات فوراً.',
      coreValue2Title: 'استقلالية كاملة',
      coreValue2Desc: 'تمكين دعم العملاء للعمل ذاتياً على مدار الساعة طوال أيام الأسبوع دون الحاجة لمطورين.',
      coreValue3Title: 'أمن تشفيري رصين',
      coreValue3Desc: 'طبقات حماية متطورة وصلاحيات مستندة للأدوار تحمي أعمالك الرقمية بالكامل.',
      footerRights: 'جميع الحقوق محفوظة. شركة فيتو لتقنيات التجارة الإلكترونية.',
    },
    dashboard: {
      welcome: 'مرحباً بعودتك، أيها القائد',
      overview: 'مركز التحكم بالنظام',
      aiAgentTab: 'استوديو الدعم الذكي (AI)',
      integrationsTab: 'بوابات المراسلة',
      settingsTab: 'إعدادات المتجر',
      signOut: 'إنهاء الجلسة',
      statusActive: 'متصل',
      statusInactive: 'غير متصل',
      integrationsHeader: 'تكامل واجهات المراسلة الموحدة (APIs)',
      integrationsSub: 'أنشئ اتصالات آمنة مع شبكات المراسلة لتوجيه محادثات العملاء مباشرة إلى وكيل فيتو الذكي الخاص بك.',
      connectBtn: 'تفعيل القناة',
      disconnectBtn: 'فصل الاتصال',
      configureBtn: 'تعديل الرابط',
      integrationFormToken: 'مفتاح الوصول السري للـ API',
      integrationFormUrl: 'رابط ويب-هوك (Webhook Ingress)',
      saveConfigBtn: 'تطبيق مفاتيح الأمان',
      aiTrainingHeader: 'دعم العملاء الذكي وإدارة المهام',
      aiTrainingSub: 'اكتب القواعد المخصصة، سياسات الخصم، قواعد الشحن، ونبرة الحديث. سيتعلم وكيل الذكاء الاصطناعي منها مباشرة وبشكل مستمر.',
      textareaPlaceholder: 'مثال:\n- أنت "روبوت فيتو" الذكي لمتجر "Elegant Soles" للأحذية.\n- قدم كود الخصم "SHOE10" (خصم 10%) عند السؤال عن تأخير الشحن.\n- سياسة الاسترجاع: خلال 30 يوماً. لا استرجاع لمنتجات التصفية.\n- سعر الشحن: 5 دولارات ثابت. وشحن مجاني للطلبات فوق 100 دولار.',
      chatbotHeader: 'محاكي تفاعلي حي على مدار الساعة',
      chatbotSub: 'اختبر قواعد العمل المخصصة في الوقت الفعلي. أرسل استفسارات كعميل حقيقي للتحقق من دقة الردود.',
      chatPlaceholder: 'اكتب استفساراً (مثال: "هل الشحن مجاني؟") ثم اضغط Enter...',
      chatSendBtn: 'إرسال الرسالة',
      testRulesAlert: 'قواعد عملك مفعلة حالياً. يستخدم المحاكي أدناه نموذج Gemini 3.5 Flash لتوليد ردود تلتزم بإرشاداتك بدقة متناهية.',
      quickStats: 'المؤشرات التشغيلية',
      statActiveChannels: 'القنوات النشطة',
      statTotalChats: 'الاستفسارات المحلولة',
      statResponseRate: 'معدل سرعة الاستجابة',
      statSatisfaction: 'مؤشر رضا العملاء',
      themeLabel: 'طبيعة واجهة المستخدم',
      themeLight: 'مظهر ناصع البياض',
      themeDark: 'مظهر بربلي غامق',
      storeSettingsHeader: 'بيانات المؤسسة للتجارة الإلكترونية',
      storeNameLabel: 'اسم العلامة التجارية / المتجر',
      storeEmailLabel: 'البريد الإلكتروني للدعم المتقدم',
      saveSettingsBtn: 'حفظ بيانات المؤسسة',
    }
  },
  fr: {
    dir: 'ltr',
    landing: {
      title: 'La gestion e-commerce, réinventée.',
      subtitle: 'Découvrez Veto — le moteur SaaS haute performance. Déployez des agents IA autonomes 24h/24, unifiez vos passerelles de messagerie, et développez votre marque en toute sécurité.',
      heroBadge: 'VETO PLATEFORME v1.4',
      loginHeader: 'Bienvenue chez Veto',
      loginSub: 'Connectez-vous pour orchestrer votre boutique.',
      emailLabel: 'E-mail professionnel',
      passwordLabel: 'Clé d\'accès (Mot de passe)',
      rememberMe: 'Mémoriser la clé d\'accès',
      forgotPassword: 'Identifiants oubliés ?',
      signInBtn: 'S\'authentifier de manière sécurisée',
      googleSignIn: 'Continuer avec Google',
      featuresHeader: 'Capacités de la plateforme',
      featuresSub: 'Conçu pour le commerce haut de gamme. Friction minimale, croissance maximale.',
      feature1Title: 'Passerelle de messagerie omnicanale',
      feature1Desc: 'Unifiez les communications clients en connectant directement les APIs de WhatsApp, Telegram et Messenger dans un panneau unique.',
      feature2Title: 'Agent IA de support évolutif',
      feature2Desc: 'Formez un chatbot souverain et intelligent basé sur vos règles commerciales et politiques internes. Résout 92% des tickets instantanément.',
      feature3Title: 'Zéro fuite de données',
      feature3Desc: 'Totalement conforme aux protocoles RGPD et CCPA. Vos données de vente, modèles privés et historiques de chat sont strictement protégés.',
      privacyHeader: 'Protocole de confidentialité strict',
      privacyText: 'Chez Veto, nous garantissons que vos jeux de données d\'entraînement, historiques de transactions et interactions clients sont chiffrés en transit et au repos. Nous n\'utilisons jamais vos données pour entraîner des modèles publics. Vous conservez 100% de la souveraineté.',
      coreValuesHeader: 'Invariants d\'architecture',
      coreValue1Title: 'Zéro temps de latence',
      coreValue1Desc: 'Opérations serveur optimisées pour l\'affichage instantané des messages et la mise à jour des données.',
      coreValue2Title: 'Autonomie absolue',
      coreValue2Desc: 'Donnez les moyens à votre support client de s\'exécuter de façon autonome 24h/24, sans ingénieur.',
      coreValue3Title: 'Sécurité cryptographique',
      coreValue3Desc: 'Des protocoles d\'authentification aux standards de l\'industrie et une gestion rigoureuse des rôles sécurisent vos flux de données.',
      footerRights: 'Tous droits réservés. Veto E-Commerce Technologies Inc.',
    },
    dashboard: {
      welcome: 'Ravi de vous revoir, Commandant',
      overview: 'Console de Commandes Système',
      aiAgentTab: 'Support Intelligent IA',
      integrationsTab: 'Canaux de Messagerie',
      settingsTab: 'Configuration Boutique',
      signOut: 'Mettre fin à la session',
      statusActive: 'Connecté',
      statusInactive: 'Hors ligne',
      integrationsHeader: 'Intégrations d\'API Omnicanales',
      integrationsSub: 'Établissez des connexions sécurisées avec les réseaux de messagerie pour déléguer les chats de vos clients à votre agent IA Veto.',
      connectBtn: 'Autoriser le canal',
      disconnectBtn: 'Déconnecter',
      configureBtn: 'Modifier le point d\'accès',
      integrationFormToken: 'Jeton d\'accès API / Clé Secrète',
      integrationFormUrl: 'URL Ingress de Webhook',
      saveConfigBtn: 'Appliquer les identifiants',
      aiTrainingHeader: 'Support IA & Gestion des tâches',
      aiTrainingSub: 'Précisez vos règles personnalisées, codes promo, politiques de livraison ou le ton employé. Votre agent IA apprend de cette consigne en continu.',
      textareaPlaceholder: 'Exemple :\n- Vous êtes "Veto Bot", représentant la boutique d\'escarpins "Elegant Soles".\n- Offrez le code de réduction "SHOE10" (10% de remise) pour toute question sur les délais de livraison.\n- Politique de retour : 30 jours standard. Pas de retour sur les soldes.\n- Livraison : tarif fixe de 5$. Offerte dès 100$ d\'achats.',
      chatbotHeader: 'Simulateur d\'Agent IA 24h/24',
      chatbotSub: 'Testez vos consignes commerciales en temps réel. Soumettez des requêtes pour valider les comportements de réponse.',
      chatPlaceholder: 'Saisissez une demande client (ex: "La livraison est-elle offerte ?") et appuyez sur Entrée...',
      chatSendBtn: 'Envoyer',
      testRulesAlert: 'Vos consignes commerciales sont actuellement actives. Le simulateur ci-dessous exploite Gemini 3.5 Flash pour générer des réponses conformes à vos directives.',
      quickStats: 'Mesures opérationnelles',
      statActiveChannels: 'Canaux actifs',
      statTotalChats: 'Demandes résolues',
      statResponseRate: 'Temps de réponse moyen',
      statSatisfaction: 'Indice de satisfaction',
      themeLabel: 'Atmosphère de l\'interface',
      themeLight: 'Lumière Pure',
      themeDark: 'Obsidian Violet',
      storeSettingsHeader: 'Métadonnées de l\'entreprise',
      storeNameLabel: 'Nom de l’enseigne / Boutique',
      storeEmailLabel: 'E-mail de support escaladé',
      saveSettingsBtn: 'Enregistrer les paramètres',
    }
  }
};
