import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <span className="section-badge">Get in Touch</span>
          <h2 className="section-title">
            Want to <span className="gradient-text">discuss</span> BeeGrub?
          </h2>
          <p className="contact-intro">
            Questions about the project or our validation journey? Contact our team using any of the channels below.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon">📧</div>
              <div className="method-info">
                <h4>Email</h4>
                <a href="mailto:beegrub.binus@gmail.com">beegrub.binus@gmail.com</a>
              </div>
            </div>
            <div className="contact-method">
              <div className="method-icon">📱</div>
              <div className="method-info">
                <h4>Instagram</h4>
                <a href="https://instagram.com/beegrub.binus" target="_blank" rel="noopener noreferrer">
                  @beegrub.binus
                </a>
              </div>
            </div>
            <div className="contact-method">
              <div className="method-icon">🎵</div>
              <div className="method-info">
                <h4>TikTok</h4>
                <a href="https://tiktok.com/@beegrub" target="_blank" rel="noopener noreferrer">
                  @beegrub
                </a>
              </div>
            </div>
            <div className="contact-method">
              <div className="method-icon">📍</div>
              <div className="method-info">
                <h4>Location</h4>
                <p>BINUS Anggrek Campus<br />Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h3>Quick Questions</h3>
          <div className="faq-list">
            <details className="faq-item">
              <summary>How does BeeGrub work?</summary>
              <p>Students pre-order food 2–3 hours before, choose a pickup time and location, then collect their order when it is ready—no queues.</p>
            </details>
            <details className="faq-item">
              <summary>How much is the BeeGrub service fee?</summary>
              <p>A flat Rp 3.000 per order. This covers coordination of pickup and the platform. Vendors still receive 100% of their listed menu prices.</p>
            </details>
            <details className="faq-item">
              <summary>Is BeeGrub only for BINUS Anggrek?</summary>
              <p>For now, we focus on BINUS Anggrek. We plan to expand to other BINUS campuses once the MVP is validated.</p>
            </details>
            <details className="faq-item">
              <summary>What payment methods are supported?</summary>
              <p>We support QRIS, e-wallets (GoPay, OVO, Dana, ShopeePay), and mobile banking via a secure payment gateway.</p>
            </details>
            <details className="faq-item">
              <summary>What stage is BeeGrub in now?</summary>
              <p>BeeGrub is currently in the market validation and planning stage. This e-catalog is part of our academic project documentation.</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
