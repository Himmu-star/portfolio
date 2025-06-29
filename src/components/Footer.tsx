export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/himmu" },
    { name: "GitHub", icon: "💻", url: "#" },
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "UdaanBase", icon: "🌐", url: "https://udaanbase.github.io/UdaanBase/" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="text-3xl font-bold mb-4">
                <span className="text-orange-500">Himanshu</span>Kumar
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Civil Engineering graduate passionate about innovative design solutions 
                and modern engineering tools. Specializing in 3D modeling, AutoCAD, and creative 
                problem-solving for tomorrow's infrastructure challenges.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target={social.url !== "#" ? "_blank" : "_self"}
                    rel={social.url !== "#" ? "noopener noreferrer" : ""}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 text-xl"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-3 text-gray-300">
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  himanshukumar96283@gmail.com
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📱</span>
                  +91 7061570522
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  East Champaran, Bihar
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Himanshu Kumar. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm">Built with</span>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 bg-gray-800 rounded text-xs">React</span>
                  <span className="px-2 py-1 bg-gray-800 rounded text-xs">Convex</span>
                  <span className="px-2 py-1 bg-gray-800 rounded text-xs">Tailwind</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-50"
            title="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
