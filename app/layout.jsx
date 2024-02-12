import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/icons/favicon.ico" />
      </head>
      <body className="dark:bg-[--gradient]">
        <Provider>
          <div className="main dark:hidden">
            <div className="gradient" />
          </div>
          if (theme === "dark") {<div className="gradient" />}
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
