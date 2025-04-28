
const stats = [
  { number: "15+", label: "Years of Experience" },
  { number: "250+", label: "Satisfied Clients" },
  { number: "50+", label: "Industries Catered" },
  { number: "50+", label: "International Brands" },
];
const Stats = () => {
  return (
    <section className="py-16  dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl md:text-5xl font-montreal font-black text-purple mb-2">
                {stat.number}
              </h3>
              <p className="text-sm uppercase tracking-wider font-grotesk text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
