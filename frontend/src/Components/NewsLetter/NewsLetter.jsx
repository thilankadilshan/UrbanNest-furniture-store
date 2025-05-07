import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>Receive VIP Deals in Your Inbox</h2>
        <p>
        Sign up for our newsletter to get the latest styles, offers, and design tips!
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
