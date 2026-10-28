export const getProfileData = () => {
  const env = import.meta.env;

  return {
    name: env.VITE_NAME || "Samrawit Atnafu",
    title: env.VITE_TITLE || "Chief Business Development Officer",
    bio: env.VITE_BIO || "Connecting ideas, creativity, and people. Welcome to my personal channels!",
    avatar: env.VITE_AVATAR || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    location: env.VITE_LOCATION || "Addis Ababa, Ethiopia",
    status: env.VITE_STATUS || "Online & open to collaborate",
    links: [
      {
        id: "linkedin",
        type: "linkedin",
        title: "LinkedIn",
        subtitle: env.VITE_LINKEDIN_SUBTITLE || "Professional Network & Experience",
        handle: env.VITE_LINKEDIN_HANDLE || "@samri-atnafu",
        url: env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/samri-atnafu",
        tag: "Career",
        badge: "Connect"
      },
      {
        id: "instagram",
        type: "instagram",
        title: "Instagram",
        subtitle: env.VITE_INSTAGRAM_SUBTITLE || "Stories, Reels & Lifestyle",
        handle: env.VITE_INSTAGRAM_HANDLE || "@samri_atnafu_",
        url: env.VITE_INSTAGRAM_URL || "https://www.instagram.com/samri_atnafu_?xtok=and2Yng3eml5OGhv",
        tag: "Social",
        badge: "Follow"
      },
      {
        id: "whatsapp",
        type: "whatsapp",
        title: "WhatsApp",
        subtitle: env.VITE_WHATSAPP_SUBTITLE || "Direct Message & Inquiries",
        handle: env.VITE_WHATSAPP_HANDLE || "+251 911 515 291",
        url: env.VITE_WHATSAPP_URL || "https://wa.me/251911515291?text=Hi%20Samri,%20I%20found%20your%20profile%20and%20would%20like%20to%20connect!",
        tag: "Instant Chat",
        badge: "Message"
      },
      {
        id: "website",
        type: "website",
        title: "Personal Website",
        subtitle: env.VITE_WEBSITE_SUBTITLE || "Portfolio, Blog & Showcase",
        handle: env.VITE_WEBSITE_HANDLE || "samriatnafu.com",
        url: env.VITE_WEBSITE_URL || "https://samriatnafu.com",
        tag: "Portfolio",
        badge: "Explore"
      }
    ]
  };
};
