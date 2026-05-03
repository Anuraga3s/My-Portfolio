import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-white border-t border-purple-500/20 relative dark:bg-slate-950">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Anurag Choudhary
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              High-octane development with precision engineering. Crafting digital experiences that accelerate your vision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
                { name: "About", href: "#about" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-purple-500 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-foreground font-semibold">Contact</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <a
                  href="mailto:anurag14082003@gmail.com"
                  className="hover:text-purple-400 transition-colors"
                >
                  anurag14082003@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                <a href="tel:+91-9977608608" className="hover:text-cyan-400 transition-colors">
                  +91-9977608608
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Anurag Choudhary. All rights reserved.
          </p>
          <a
            href="#"
            className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
