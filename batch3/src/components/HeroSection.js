function HeroSection() {
  return (
    <section className="hero text-center text-white d-flex align-items-center">
      <div className="container">
        <h1 className="display-4 fw-bold">
          Welcome to My Website
        </h1>

        <p className="lead mt-3">
          Build responsive websites easily using React and Bootstrap.
        </p>

        <button className="btn btn-warning btn-lg mt-3">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default HeroSection;