import { useState, useEffect } from "react";

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Civil Engineer",
    "AutoCAD Expert", 
    "Revit Specialist",
    "SketchUp Designer",
    "3D Modeling Expert"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-orange-400 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-6xl text-gray-600">
                👷‍♂️
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
            Himanshu <span className="text-blue-600">Kumar</span>
          </h1>
          
          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-3xl text-orange-600 font-semibold">
              {texts[currentText]}
            </h2>
          </div>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Civil Engineer graduate with expertise in AutoCAD, SketchUp, Revit, and Enscape. 
            Passionate about 3D modeling, innovative design solutions, and delivering excellence in every project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: "1s" }}></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: "2s" }}></div>
        </div>
      </div>
    </section>
  );
}
