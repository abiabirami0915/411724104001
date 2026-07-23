function FeatureCards() {
  return (
    <section className="container my-5">

      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body text-center">
              <h3>Fast</h3>
              <p>
                React provides fast rendering with reusable components.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body text-center">
              <h3>Responsive</h3>
              <p>
                Bootstrap makes your website mobile friendly.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow h-100">
            <div className="card-body text-center">
              <h3>Easy</h3>
              <p>
                Build beautiful layouts with very little code.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default FeatureCards;