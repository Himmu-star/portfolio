export default function Experience() {
  const experiences = [
    {
      title: "Civil Engineering Graduate",
      company: "Government Polytechnic Barauni, Begusarai",
      period: "2022 - 2025",
      description: "Successfully completed Diploma in Civil Engineering with exceptional academic performance. Specialized in modern design tools and 3D modeling techniques.",
      achievements: [
        "Graduated with CGPA of 8.96",
        "Best AutoCAD Drawing Performer in batch",
        "Active participation in technical competitions and hackathons"
      ],
      icon: "🎓"
    },
    {
      title: "Intern - Road Construction",
      company: "Road Construction Department (RCD), Begusarai", 
      period: "2024 (4 Weeks)",
      description: "Gained hands-on experience in road construction processes, quality control measures, and project management documentation.",
      achievements: [
        "Learned road construction methods and quality checks",
        "Participated in material testing procedures",
        "Prepared project management presentations (PPT)"
      ],
      icon: "🛣️"
    },
    {
      title: "Site Visit Observer",
      company: "Welspun Enterprises - Aunta Simariya Bridge",
      period: "2024",
      description: "Observed advanced bridge construction techniques, structural design implementation, and learned from expert engineers on-site.",
      achievements: [
        "Studied bridge construction methodologies",
        "Analyzed structural design principles in practice",
        "Gained insights from experienced field engineers"
      ],
      icon: "🌉"
    }
  ];

  const achievements = [
    {
      title: "Smart Bihar Hackathon 2024",
      award: "1st Runner-Up",
      description: "Corrugated Weir Design for flood control",
      icon: "🏅"
    },
    {
      title: "AI Workshop by IIT Patna",
      award: "Winner",
      description: "Excellence in artificial intelligence concepts",
      icon: "🧠"
    },
    {
      title: "Hindi Poem Competitions",
      award: "1st & 2nd Prize (Multiple)",
      description: "Creative writing and presentation skills",
      icon: "🏆"
    },
    {
      title: "AutoCAD Excellence",
      award: "Best Performer in Batch",
      description: "Outstanding technical drawing skills",
      icon: "📐"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              My <span className="text-blue-600">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A journey of learning, growth, and engineering excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                <div className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}>
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white border-4 border-blue-500 rounded-full items-center justify-center text-2xl z-10">
                    {exp.icon}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center mb-4 md:hidden">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-xl mr-4">
                          {exp.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                          <p className="text-blue-600 font-semibold">{exp.company}</p>
                        </div>
                      </div>

                      <div className="hidden md:block mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                        <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                      </div>

                      <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                        {exp.period}
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Awards & Achievements Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Awards & Achievements</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">{achievement.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{achievement.title}</h4>
                      <p className="text-orange-600 font-semibold">{achievement.award}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Education</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Diploma in Civil Engineering</h4>
                <p className="text-blue-600 font-semibold mb-2">Government Polytechnic Barauni, Begusarai</p>
                <p className="text-gray-500 mb-4">2022 - 2025 | Final CGPA: 8.96</p>
                <p className="text-gray-600">
                  Specialized in modern design tools, 3D modeling, and innovative engineering solutions.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">📚</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Matriculation (10th)</h4>
                <p className="text-blue-600 font-semibold mb-2">BAAP High School, Chakia, East Champaran</p>
                <p className="text-gray-500 mb-4">BSEB | 2022 | 88.4%</p>
                <p className="text-gray-600">
                  Strong foundation in mathematics and science, leading to engineering pursuits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
