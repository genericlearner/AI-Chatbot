import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

// Apply Roboto font with specific weight
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "ChatBot",
  description: "Your AI coding companion for efficient and effective coding assistance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={roboto.className} style={styles.body}>
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <h1 style={styles.title}>ChatBot</h1>
            <nav style={styles.nav}>
              <a href="#home" style={styles.navLink}>Home</a>
              <a href="#features" style={styles.navLink}>Features</a>
              <a href="#about" style={styles.navLink}>About</a>
              <a href="#contact" style={styles.navLink}>Contact</a>
            </nav>
          </div>
        </header>
        <main style={styles.main}>
          {children}
        </main>
        <footer style={styles.footer}>
          <p style={styles.footerText}>© {new Date().getFullYear()} ChatBot. All rights reserved.</p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}

// Inline styles for the layout
const styles = {
  body: {
    margin: 0,
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#f0f0f0',
    color: '#333',
    lineHeight: 1.6,
  },
  header: {
    backgroundColor: '#ffffff',
    color: '#333',
    padding: '1rem 2rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid #ddd',
    position: 'sticky',
    top: 0,
    width: '100%',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  navLink: {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#0056b3',
  },
  main: {
    padding: '2rem',
    minHeight: 'calc(100vh - 100px)', // Adjust for header and footer
    backgroundColor: '#ffffff',
  },
  footer: {
    backgroundColor: '#ffffff',
    color: '#333',
    padding: '1rem 2rem',
    textAlign: 'center',
    borderTop: '1px solid #ddd',
  },
  footerText: {
    margin: 0,
    fontSize: '0.875rem',
  },
};
