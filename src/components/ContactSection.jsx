import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-gradient-to-b from-white to-slate-100 text-foreground dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-6xl font-black mb-4 text-center">
          Get In <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex justify-center">
          <div className="space-y-8 text-center">
            <h3 className="text-2xl font-semibold mb-6 fade-in-section-delay-2">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4 transition-transform duration-300 cursor-default hover:scale-105">
                <div className="p-3 rounded-full bg-primary/10 hover:scale-110 transition-transform duration-300">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:anurag14082003@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    anurag14082003@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 transition-transform duration-300 cursor-default hover:scale-105">
                <div className="p-3 rounded-full bg-primary/10 hover:scale-110 transition-transform duration-300">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+91-9977608608"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-9977608608
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4 transition-transform duration-300 cursor-default hover:scale-105">
                <div className="p-3 rounded-full bg-primary/10 hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Bhopal, Madhya Pradesh, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/anurag-choudhary-cse/"
                  target="_blank"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Linkedin />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-12"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
