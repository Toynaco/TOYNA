```tsx
// app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'TOYNA',
  description: 'Children toy store',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
