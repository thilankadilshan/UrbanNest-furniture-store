import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>Get Exclusive Offers in Your Inbox</h2>
        <p>
          Join our newsletter to receive the latest collections, deals, and
          design tips.
        </p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
