// PrivacyPolicy.js

import React from 'react';
import './PrivacyPolicy.css';
import FooterSection from "../components/FooterSection"
const PrivacyPolicy = () => {
  return (
    <>
    <div className="privacy-policy-container">
      <header className="privacy-policy-header">
        <h1>Privacy Policy</h1>
      </header>
      <section className="privacy-policy-content">
        <p>
        We collect personal and usage information when you interact with the billboard. 
        We use this information to display content, communicate with you, and improve the billboard. 
        Your information may be disclosed with your consent, for legal compliance, or to protect rights. 
        We take reasonable security measures. Third-party links are not covered by this policy. 
        </p>
        {/* Include additional content as needed */}
      </section>
      <footer className="privacy-policy-footer">
        <p>Last Updated: May 03, 2024</p>
      </footer>
    </div>
    <FooterSection />
    </>
  );
};

export default PrivacyPolicy;

