export const getProfileData = () => {
  const env = import.meta.env;

  return {
    name: env.VITE_NAME || "Samrawit Atnafu",
    title: env.VITE_TITLE || "Chief Business Development Officer",
    bio: env.VITE_BIO || "",
    avatar: env.VITE_AVATAR || "/avatar.png",
    location: env.VITE_LOCATION || "",
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
        subtitle: env.VITE_INSTAGRAM_SUBTITLE,
        handle: env.VITE_INSTAGRAM_HANDLE,
        url: env.VITE_INSTAGRAM_URL,
        tag: "Social",
        badge: "Follow"
      },
      {
        id: "whatsapp",
        type: "whatsapp",
        title: "WhatsApp",
        subtitle: env.VITE_WHATSAPP_SUBTITLE,
        handle: env.VITE_WHATSAPP_HANDLE,
        url: env.VITE_WHATSAPP_URL,
        tag: "Instant Chat",
        badge: "Message"
      },
      {
        id: "website",
        type: "website",
        title: "Personal Website",
        subtitle: env.VITE_WEBSITE_SUBTITLE,
        handle: env.VITE_WEBSITE_HANDLE,
        url: env.VITE_WEBSITE_URL,
        tag: "Portfolio",
        badge: "Explore"
      }
    ]
  };
};
