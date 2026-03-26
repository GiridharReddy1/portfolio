import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-sm text-muted-foreground">
        © 2026 Giridhar Reddy. All rights reserved.
      </p>
      <div className="flex gap-4">
        {[
          { icon: Github, href: "https://github.com/GiridharReddy1" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/giridhar-reddy-gutam" },
          { icon: Mail, href: "mailto:g.giridharreddy9848@email.com" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <item.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
