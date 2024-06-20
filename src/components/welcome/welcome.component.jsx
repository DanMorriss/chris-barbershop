import "./welcome.styles.css";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-title-container">
        <hr />
        <h2>Welcome to Chris' Barbershop</h2>
        <hr />
      </div>
      <p className="welcome-description">
        Your destination for grooming excellence in the heart of Marlborough.
      </p>
      <div className="welcome-detail-section">
        <h3>Masterful Craftmanship</h3>
        <p>
          Nick's barbershop is run by master barber Nick McClaren who has a
          masters in grooming from the Universty of Morpork.
        </p>
      </div>
      <div className="welcome-detail-section">
        <h3>Cutting-Edge Techniques</h3>
        <p>
          Nick stays at the forefront of the industry, incorporating the latest
          trends and technologies to give you the best possible grooming
          experience.
        </p>
      </div>
      <div className="welcome-detail-section">
        <h3>Personalized Services</h3>
        <p>
          All services are tailored to your individual preferences, whether it's
          a classic cut, a modern style, or a beard grooming masterpiece.
        </p>
      </div>
      <div className="welcome-detail-section">
        <h3>Quality Products</h3>
        <p>
          He only use top-tier grooming products to ensure you get the best
          results and maintain your look long after you leave his chair.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
