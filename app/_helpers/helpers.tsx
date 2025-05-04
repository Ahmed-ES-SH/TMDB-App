export const formatTitle = (title: string) =>
  title.toLowerCase().replace(/\s+/g, "-");

// دالة لإعادة البيانات المشتركة
export const getSharedMetadata = (title: string, description: string) => ({
  keywords: [
    "FLIXTV",
    "Watch Movies Online",
    "Stream TV Shows",
    "Latest Series",
    "Online Entertainment",
    "HD Movies",
    "Watch for Free",
    "Streaming Platform",
  ],
  openGraph: {
    title: title,
    description: description,
    url: `https://www.flixtv.com`, // يُعدّل حسب البنية الفعلية للموقع
    siteName: "FLIXTV",
    images: [
      {
        url: "https://www.flixtv.com/images/og-image.jpg", // استبدل بالرابط الصحيح
        width: 1200,
        height: 630,
        alt: "FLIXTV - Stream Movies and Shows Online",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    image: "https://www.flixtv.com/images/twitter-image.jpg", // استبدل بالرابط الصحيح
  },
});
