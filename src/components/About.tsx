export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8 shadow-lg">
                <div className="text-8xl mb-4">🏗️</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Building the Future</h3>
                <p className="text-gray-600 leading-relaxed">
                  As a Diploma Civil Engineer graduate from Government Polytechnic Barauni, I specialize in 
                  creating innovative design solutions using cutting-edge tools like AutoCAD, Revit, SketchUp, 
                  and Enscape. My passion lies in combining traditional engineering principles with modern 3D modeling techniques.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">My Journey</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I have successfully completed my Diploma in Civil Engineering with an impressive CGPA of 8.96 
                  from Government Polytechnic Barauni. I gained hands-on experience through internships at Road Construction Department 
                  and site visits to major infrastructure projects. My expertise in 3D modeling and 
                  design tools allows me to bring creative visions to life with precision.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">8.96</div>
                  <div className="text-gray-600">Final CGPA</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600">4+</div>
                  <div className="text-gray-600">Design Tools Mastered</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">5+</div>
                  <div className="text-gray-600">Awards Won</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600">3+</div>
                  <div className="text-gray-600">Major Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
