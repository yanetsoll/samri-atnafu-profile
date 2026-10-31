const cleanEnv = (val, fallback = "") => {
  if (val === undefined || val === null) return fallback;
  const str = String(val).trim();
  if (!str) return fallback;
  // Automatically strip leading and trailing quotes (", ', “”, ‘’, etc.)
  const cleaned = str.replace(/^["'“”‘’\s]+|["'“”‘’\s]+$/g, '').trim();
  return cleaned || fallback;
};

export const getProfileData = () => {
  const env = import.meta.env;

  return {
    name: cleanEnv(env.VITE_NAME, "Tewos Technology"),
    title: cleanEnv(env.VITE_TITLE, "Driving Digital Innovation"),
    bio: cleanEnv(env.VITE_BIO, ""),
    banner: cleanEnv(env.VITE_BANNER, "/banner.png"),
    avatar: cleanEnv(env.VITE_AVATAR, "/avatar-circle.png"),
    location: cleanEnv(env.VITE_LOCATION, ""),
    status: cleanEnv(env.VITE_STATUS, "Online & open to collaborate"),
    links: [
      {
        id: "website",
        type: "website",
        title: cleanEnv(env.VITE_WEBSITE_TITLE, "Tewos Website"),
        subtitle: cleanEnv(env.VITE_WEBSITE_SUBTITLE, ""),
        handle: cleanEnv(env.VITE_WEBSITE_HANDLE, "tewostech.com"),
        url: cleanEnv(env.VITE_WEBSITE_URL, "https://tewostech.com/"),
        tag: "Portfolio",
        badge: "Explore"
      },
      {
        id: "linkedin",
        type: "linkedin",
        title: cleanEnv(env.VITE_LINKEDIN_TITLE, "Tewos LinkedIn"),
        subtitle: cleanEnv(env.VITE_LINKEDIN_SUBTITLE, "Professional Network & Experience"),
        handle: cleanEnv(env.VITE_LINKEDIN_HANDLE, "@tewos-technology"),
        url: cleanEnv(env.VITE_LINKEDIN_URL, "https://www.linkedin.com/company/tewos-technology"),
        tag: "Career",
        badge: "Connect"
      },
      {
        id: "whatsapp",
        type: "whatsapp",
        title: cleanEnv(env.VITE_WHATSAPP_TITLE, "WhatsApp"),
        subtitle: cleanEnv(env.VITE_WHATSAPP_SUBTITLE, ""),
        handle: cleanEnv(env.VITE_WHATSAPP_HANDLE, "+251 911 515 291"),
        url: cleanEnv(env.VITE_WHATSAPP_URL, "https://wa.me/251911515291"),
        tag: "Instant Chat",
        badge: "Message"
      }
    ]
  };
};
