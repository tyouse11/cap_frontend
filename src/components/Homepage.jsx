import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
      <div className="homepage-container">
      <div className="welcome-section">
        <h1>Welcome to Puppy Lovers!</h1>
        <p>Find your perfect companion among our adorable puppies.</p>
        <Link to="/products"><button className="explore-button">Explore Puppies</button></Link>
      </div>
      <div className="about-section">
        <h2>About Us</h2>
        <p>Puppy Lovers is a family-owned business dedicated to connecting loving families with healthy and happy puppies. With our wide selection of breeds, we're sure to have the perfect furry friend for you!</p>
        <Link to="/about"><button className="learn-more-button">Learn More</button></Link>
      </div>
      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions or want to visit us in person? Reach out to our team for assistance!</p>
        <button className="contact-button">Contact</button>
      </div>
    </div>
  );
};
  