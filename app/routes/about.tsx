const About = () => {
  return (
    <div className="min-h-screen pt-28">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-grotesk font-bold mb-8 text-purple">
          About
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-montreal font-semibold mb-4 text-purple">
              Our Story
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              MANTAPRABHA is a creative design studio specializing in premium
              visual experiences. Founded with a passion for crafting beautiful,
              functional designs that make an impact.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We believe in the power of thoughtful design to transform brands
              and create meaningful connections with audiences. Every project we
              undertake is approached with dedication, creativity, and
              meticulous attention to detail.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-montreal font-semibold mb-4 text-purple">
              Our Approach
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We combine strategic thinking with creative execution to deliver
              results that exceed expectations. Our collaborative process
              ensures that every design solution is tailored to meet the unique
              needs and goals of our clients.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              From concept to completion, we are committed to excellence in
              every aspect of our work. We stay at the forefront of design
              trends and technologies to provide innovative solutions that stand
              out in today&apos;s competitive landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
