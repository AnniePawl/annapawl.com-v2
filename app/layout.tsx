import "./globals.css";

export const metadata = {
  title: "Anna Pawl",
  description: "Portfolio 2.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: 24 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
