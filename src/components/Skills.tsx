import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Skills() {
  const skills = useQuery(api.skills.getAllSkills) || [];

  const skillCategories = [
    {
      title: "Design Software",
      icon: "💻",
      skills: [
        { name: "AutoCAD", proficiency: 95 },
        { name: "Revit", proficiency: 88 },
        { name: "SketchUp", proficiency: 90 },
        { name: "Enscape", proficiency: 85 },
      ]
    },
    {
      title: "Engineering",
      icon: "⚙️",
      skills: [
        { name: "3D Modeling", proficiency: 92 },
        { name: "Structural Design", proficiency: 85 },
        { name: "Project Planning", proficiency: 80 },
        { name: "Site Supervision", proficiency: 78 },
      ]
    },
    {
      title: "Technical",
      icon: "🔧",
      skills: [
        { name: "3D Printing", proficiency: 90 },
        { name: "MS Office", proficiency: 88 },
        { name: "Photoshop", proficiency: 82 },
        { name: "Presentation", proficiency: 90 },
      ]
    }
  ];

  const SkillBar = ({ name, proficiency }: { name: string; proficiency: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-blue-600 font-semibold">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-blue-500 to-orange-500 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              My <span className="text-blue-600">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expertise across various engineering disciplines and cutting-edge design tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-8">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skillIndex} name={skill.name} proficiency={skill.proficiency} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills & Achievements */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Soft Skills & Specializations</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Communication",
                "Teamwork", 
                "Leadership",
                "Creativity",
                "Problem-Solving",
                "Social Media Handling",
                "3D Printing - CAD Modeling",
                "Rubik's Cube Solver"
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
