function AboutSection() {
  return (
    <section className="container my-5">

      <div className="row align-items-center">

        <div className="col-md-6">
          <img
            src="https://picsum.photos/500/300"
            alt="About"
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">

          <h2>About Us</h2>

          <p>
            We create responsive and modern web applications using React and
            Bootstrap. Our goal is to make web development simple and enjoyable.
          </p>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;