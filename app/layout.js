export const metadata = {
  title: "TabNews Clone",
  description: "Clone do TabNews desenvolvido durante o curso.dev/ia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
