// app/layout.tsx
import "styles/globals.css";

export const metadata = {
  title: "TOYNA",
  description: "Children's toy store"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
