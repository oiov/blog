import { Metadata } from "next";

export const siteData = (title: string): Metadata => {
  return {
    title: {
      default: title,
      template: "%s | oiov",
    },
    description: "Co-founder of inke.app",
    openGraph: {
      title: "oiov",
      description: "Co-founder of inke.app",
      url: "https://blog.oiov.dev",
      siteName: "oiov",
      images: [
        {
          url: "https://blog.oiov.dev/og.png",
          width: 1920,
          height: 1080,
        },
      ],
      locale: "zh-CN",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: "Oiov",
      card: "summary_large_image",
    },
    icons: {
      shortcut: "/favicon.png",
    },
  };
};
