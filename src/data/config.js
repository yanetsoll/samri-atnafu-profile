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
    name: cleanEnv(env.VITE_NAME, "Samrawit Atnafu"),
    title: cleanEnv(env.VITE_TITLE, "Chief Business Development Officer"),
    bio: cleanEnv(env.VITE_BIO, ""),
    avatar: cleanEnv(env.VITE_AVATAR, "/avatar.png"),
    location: cleanEnv(env.VITE_LOCATION, ""),
    status: cleanEnv(env.VITE_STATUS, "Online & open to collaborate"),
    links: [
      {
        id: "website",
        type: "website",
        title: "Personal Website",
        subtitle: cleanEnv(env.VITE_WEBSITE_SUBTITLE, ""),
        handle: cleanEnv(env.VITE_WEBSITE_HANDLE, "tewostech.com"),
        url: cleanEnv(env.VITE_WEBSITE_URL, "https://tewostech.com/"),
        tag: "Portfolio",
        badge: "Explore"
      },
      {
        id: "linkedin",
        type: "linkedin",
        title: "LinkedIn",
        subtitle: cleanEnv(env.VITE_LINKEDIN_SUBTITLE, "Professional Network & Experience"),
        handle: cleanEnv(env.VITE_LINKEDIN_HANDLE, "@samri-atnafu"),
        url: cleanEnv(env.VITE_LINKEDIN_URL, "https://www.linkedin.com/in/samri-atnafu"),
        tag: "Career",
        badge: "Connect"
      },
      {
        id: "whatsapp",
        type: "whatsapp",
        title: "WhatsApp",
        subtitle: cleanEnv(env.VITE_WHATSAPP_SUBTITLE, ""),
        handle: cleanEnv(env.VITE_WHATSAPP_HANDLE, "+251 911 515 291"),
        url: cleanEnv(env.VITE_WHATSAPP_URL, "https://wa.me/251911515291"),
        tag: "Instant Chat",
        badge: "Message"
      }
    ]
  };
};
