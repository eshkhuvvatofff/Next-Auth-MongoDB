import LayoutWrapper from "@/components/layout/LayoutWrapper";
import "./globals.css";

export const metadata = {
  title: "Next-Auth-Mongodb",
  description: "Next-auth-mongodb learning",
  icons: {
    icon: "/Logo.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning

    >
      <body>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
