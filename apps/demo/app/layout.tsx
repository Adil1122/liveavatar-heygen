import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black flex flex-col min-h-screen text-white justify-center items-center">
        {children}
      </body>
    </html>
  );
}
