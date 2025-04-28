const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Luxury Brand Identity",
      category: "Branding",
      imagePlaceholder: "bg-purple/90",
    },
    {
      id: 2,
      title: "E-Commerce Redesign",
      category: "UI/UX Design",
      imagePlaceholder: "bg-purple/80",
    },
    {
      id: 3,
      title: "Editorial Magazine",
      category: "Print Design",
      imagePlaceholder: "bg-purple/70",
    },
    {
      id: 4,
      title: "Mobile App Interface",
      category: "App Design",
      imagePlaceholder: "bg-purple/60",
    },
    {
      id: 5,
      title: "Corporate Website",
      category: "Web Development",
      imagePlaceholder: "bg-purple/80",
    },
    {
      id: 6,
      title: "Annual Report",
      category: "Print Design",
      imagePlaceholder: "bg-purple/90",
    },
  ];

  return (
    <div className="min-h-screen pt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-grotesk font-bold mb-3 text-purple">Portfolio</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              A selection of our finest work showcasing our expertise across various design disciplines.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <ul className="flex flex-wrap gap-3 text-sm">
              <li className="px-4 py-2 bg-purple text-white rounded-full">All</li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full cursor-pointer transition-colors">
                Branding
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full cursor-pointer transition-colors">
                UI/UX
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full cursor-pointer transition-colors">
                Print
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className={`aspect-[4/3] ${project.imagePlaceholder} mb-4 overflow-hidden rounded-md`}>
                <div className="w-full h-full transform transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-montreal font-semibold text-purple">{project.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{project.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 