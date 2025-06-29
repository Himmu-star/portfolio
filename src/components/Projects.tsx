import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const projects = useQuery(api.projects.getAllProjects) || [];

  // Updated projects data based on Himanshu's profile
  const sampleProjects = [
    {
      _id: "1",
      title: "3D Printed Architectural Model",
      description: "Designed and printed a detailed 3D model of the college building using CAD and slicing tools. Showcased precision in architectural modeling and 3D printing technology.",
      category: "modeling",
      technologies: ["AutoCAD", "3D Printing", "CAD Modeling", "Slicing Tools"],
      imageUrl: "🏛️",
      completionDate: "2024",
      client: "Government Polytechnic Barauni",
      featured: true,
    },
    {
      _id: "2", 
      title: "Corrugated Weir Design",
      description: "Innovative flood control structure design for Smart Bihar Hackathon. Proposed sustainable solution for water management achieving 1st Runner-Up position.",
      category: "infrastructure",
      technologies: ["AutoCAD", "Structural Design", "Water Management", "Innovation"],
      imageUrl: "💧",
      completionDate: "2024",
      client: "Smart Bihar Hackathon",
      featured: true,
    },
    {
      _id: "3",
      title: "Road Construction Analysis",
      description: "Comprehensive study and analysis of road construction methods during RCD internship. Gained hands-on experience in quality checks and material testing.",
      category: "infrastructure", 
      technologies: ["Site Analysis", "Quality Control", "Material Testing", "PPT"],
      imageUrl: "🛣️",
      completionDate: "2024",
      client: "Road Construction Department",
      featured: true,
    },
    {
      _id: "4",
      title: "Bridge Construction Study",
      description: "Detailed observation and analysis of Aunta Simariya Bridge Project construction methods, structural design, and execution techniques.",
      category: "infrastructure",
      technologies: ["Structural Analysis", "Bridge Design", "Construction Methods"],
      imageUrl: "🌉",
      completionDate: "2024",
      client: "Welspun Enterprises",
      featured: false,
    },
    {
      _id: "5",
      title: "AutoCAD Technical Drawings",
      description: "Best performer in batch for AutoCAD technical drawings. Created precise architectural and engineering drawings with attention to detail.",
      category: "design",
      technologies: ["AutoCAD", "Technical Drawing", "Precision Design"],
      imageUrl: "📐",
      completionDate: "2024",
      client: "Academic Project",
      featured: false,
    },
    {
      _id: "6",
      title: "Revit 3D Building Model",
      description: "Comprehensive 3D building information modeling using Revit, showcasing advanced BIM capabilities and architectural visualization.",
      category: "modeling",
      technologies: ["Revit", "BIM", "3D Modeling", "Visualization"],
      imageUrl: "🏢",
      completionDate: "2024",
      client: "Academic Project", 
      featured: false,
    },
  ];

  const displayProjects = projects.length > 0 ? projects : sampleProjects;

  const categories = [
    { id: "all", label: "All Projects", icon: "🏗️" },
    { id: "modeling", label: "3D Modeling", icon: "🏛️" },
    { id: "infrastructure", label: "Infrastructure", icon: "🌉" },
    { id: "design", label: "Design", icon: "📐" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? displayProjects 
    : displayProjects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              My <span className="text-blue-600">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing innovative engineering solutions and creative design projects
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-blue-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center text-6xl">
                  {project.imageUrl || "🏗️"}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{project.completionDate}</span>
                    {project.client && <span>{project.client}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
