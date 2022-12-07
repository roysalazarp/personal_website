import "../styles/globals.scss";
import Navbar from "./navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <h1 className="table_of_contents_only">Header</h1>
          <Navbar />
        </header>
        <main>
          <h1 className="table_of_contents_only">Main content</h1>
          {children}
        </main>
        <footer>
          <h1 className="table_of_contents_only">Footer</h1>
        </footer>
      </body>
    </html>
  );
}
