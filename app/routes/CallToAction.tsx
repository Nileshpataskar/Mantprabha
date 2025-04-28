import { Link } from "@remix-run/react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-purple text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-montreal font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-10 text-white/80">
          Let&apos;s collaborate to create something extraordinary for your
          brand.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gold hover:bg-gold/90 text-purple font-bold py-4 px-8 rounded-full transition-all"
        >
          Let&apos;s Get Started
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
