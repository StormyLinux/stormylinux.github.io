export default {
  title: "Stormy Linux",
  description: "A minimal and fast Debian based Linux distro.",

  themeConfig: {
    logo: "/stormylinux-logo.png",
    // logo: "/logo.svg",
    siteTitle: "Stormy Linux",
    // Navbar Link
    nav: [
      { text: "Docs", link: "/welcome-intro" },
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      {
        // Dropdown Menu
        text: "Changelog",
        items: [
          { text: "v1.0", link: "/stormylinux/v1" },
          { text: "v2.0", link: "/stormylinux/v2" },
        ],
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/stormylinux" },
      { icon: "discord", link: "..." },
    ],
    // Sidebar
    sidebar: [
      {
        text: "Welcome!",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/welcome-intro" },
          { text: "What Is Stormy Linux?", link: "/what-is-stormy-linux" },
          { text: "Why Use Stormy Linux?", link: "/why-use-stormy-linux" },
          { text: "Who is it for?", link: "/who-is-it-for" },
          { text: "Getting Started", link: "/get-started-with-stormy-linux" },
        ],
      },
      {
        text: "Installation",
        collapsible: false,
        items: [
          { text: "Installing Qtile", link: "/install-qtile" },
          { text: "Required Applications", link: "/required-applications" },
          { text: "Installing Stormy Linux", link: "/installing-stormy-linux" },
          { text: "Dotfiles", link: "/dotfiles" },
          { text: "Configuration", link: "/configuration" },
          { text: "Debian 12 Stable", link: "/debian-12-stable" },
        ],
      },
      {
        text: "Using Stormy Linux",
        collapsible: true,
        items: [
          { text: "Status Bar", link: "/status-bar" },
          { text: "Workspaces", link: "/workspaces" },
          { text: "Essentials", link: "/essentials" },
        ],
      },
      {
        text: "Shortcuts",
        collapsible: true,
        items: [
          { text: "Keybindings", link: "/keybindings" },
        ],
      },
    ],
    footer: {
      message: "Licenced under GPL.",
      copyright: "Copyright © 2022-present. Stormy Linux ",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};
