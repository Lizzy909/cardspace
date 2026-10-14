
import { useState } from "react";
import "./App.css";

const initialContact = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function App() {
  const [page, setPage] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const [reference, setReference] = useState("");
  const [giftCardNumber, setGiftCardNumber] = useState("");
  const [giftCardType, setGiftCardType] = useState("Amazon");
  const [notice, setNotice] = useState("");

  const [contactForm, setContactForm] = useState(initialContact);
  const [contactNotice, setContactNotice] = useState("");

  function navigate(destination) {
    setPage(destination);
    setMenuOpen(false);
    setNotice("");
    setContactNotice("");
    setReference("");
    setGiftCardNumber("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToSection(id) {
    setMenuOpen(false);

    if (page !== "home") {
      setPage("home");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  function handleVerify(event) {
    event.preventDefault();

    setNotice(
      `Demo only: "${reference.trim()}" has not been verified. Connect a real identity verification service to validate references.`
    );
  }

  function handleGiftCardVerify(event) {
    event.preventDefault();

    setNotice(
      `Demo only: Your ${giftCardType} gift card details have not been verified. No balance or validity check was performed.`
    );
  }

  function handleContactSubmit(event) {
    event.preventDefault();

    setContactNotice(
      "Your form has been submitted in this demo, but no email has been sent. Connect a form service to receive enquiries."
    );
  }

  const navItems = [
    { label: "Home", destination: "home" },
    { label: "Services", destination: "services" },
    { label: "Verify ID", destination: "verify" },
    { label: "Gift Cards", destination: "gift-card" },
    { label: "Contact", destination: "contact" },
  ];

  return (
    <div className="app">
      <header className="navbar">
        <button
          className="logo"
          onClick={() => navigate("home")}
          aria-label="Cardspace home"
        >
          card<span>space</span><b>.</b>
        </button>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <button
              key={item.destination}
              className={`nav-link ${
                page === item.destination ? "active" : ""
              }`}
              onClick={() => navigate(item.destination)}
            >
              {item.label}
            </button>
          ))}

          <button
            className="nav-link"
            onClick={() => scrollToSection("how-it-works")}
          >
            How it works
          </button>
        </nav>

        <div className="nav-actions">
          <button
            className="signup-btn"
            onClick={() => navigate("gift-card")}
          >
            Verify gift card <span>↗</span>
          </button>
        </div>
      </header>

      {/* HOME */}
      {page === "home" && (
        <main>
          <section className="hero">
            <div className="hero-content">
              <div className="announcement">
                <span className="status-dot" />
                YOUR IDENTITY, REIMAGINED
              </div>

              <h1>
                Make your first
                <br />
                impression <span>iconic.</span>
              </h1>

              <p className="hero-description">
                Your work, your story, your connections. Create a
                digital business card that feels as exceptional as
                the person behind it.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-btn"
                  onClick={() => navigate("services")}
                >
                  Explore services <span>↗</span>
                </button>

                <button
                  className="secondary-link"
                  onClick={() => scrollToSection("features")}
                >
                  Explore Cardspace <span>↓</span>
                </button>
              </div>

              <div className="hero-extra-actions">
                <button
                  className="outline-btn"
                  onClick={() => navigate("verify")}
                >
                  <span>◇</span> Verify identity
                </button>

                <button
                  className="outline-btn"
                  onClick={() => navigate("gift-card")}
                >
                  <span>▣</span> Verify gift card
                </button>
              </div>

              <div className="hero-note">
                <span>✳</span>
                Made for people going places.
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow" />

              <div className="floating-label label-top">
                <span className="gold-star">✦</span>
                DIGITAL IDENTITY, YOUR WAY
              </div>

              <div className="business-card">
                <div className="card-top">
                  <span className="card-brand">cs.</span>
                  <span className="card-number">
                    DIGITAL CARD / PREVIEW
                  </span>
                </div>

                <div className="card-profile">
                  <div className="avatar-placeholder">Y</div>
                  <div>
                    <p className="profile-label">DESIGN PREVIEW</p>
                    <h2>Your name here.</h2>
                    <p className="profile-role">
                      Your role · Your story
                    </p>
                  </div>
                </div>

                <div className="card-divider" />

                <div className="card-bottom">
                  <div>
                    <span className="contact-label">
                      YOUR CONTACT DETAILS
                    </span>
                    <p>Add your details when you create a card</p>
                  </div>
                  <div className="qr-placeholder">▦</div>
                </div>

                <div className="card-watermark">C</div>
              </div>

              <div className="floating-label label-bottom">
                <span className="gold-star">✦</span>
                ONE LINK. YOUR WHOLE WORLD.
              </div>

              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
            </div>
          </section>

          <section className="features" id="features">
            <div className="features-heading">
              <p className="section-eyebrow">
                LESS FRICTION. MORE CONNECTION.
              </p>

              <h2>
                Everything you need.
                <br />
                <span>Nothing you don't.</span>
              </h2>

              <p className="section-description">
                Cardspace brings your digital identity and useful
                verification tools into one convenient experience.
              </p>
            </div>

            <div className="feature-grid">
              <article className="feature-card">
                <span className="feature-icon">✳</span>
                <h3>Your digital card</h3>
                <p>
                  Bring your name, work, and contact details together
                  in one place.
                </p>
              </article>

              <article className="feature-card">
                <span className="feature-icon">↗</span>
                <h3>Easy connections</h3>
                <p>
                  Make it easier for people to discover you and
                  get in touch.
                </p>
              </article>

              <article className="feature-card">
                <span className="feature-icon">▣</span>
                <h3>Gift card tools</h3>
                <p>
                  Access the gift card verification interface in
                  one convenient place.
                </p>
                <button
                  className="service-link"
                  onClick={() => navigate("gift-card")}
                >
                  Explore gift cards ↗
                </button>
              </article>
            </div>
          </section>

          <section className="how-section" id="how-it-works">
            <p className="section-eyebrow">A BETTER WAY TO CONNECT</p>

            <h2>
              Three steps. <span>One you.</span>
            </h2>

            <div className="steps-grid">
              <article className="step-card">
                <span>01</span>
                <h3>Explore services</h3>
                <p>
                  Discover the identity and gift card tools available
                  in Cardspace.
                </p>
              </article>

              <article className="step-card">
                <span>02</span>
                <h3>Choose a service</h3>
                <p>
                  Select identity verification or gift card
                  verification.
                </p>
              </article>

              <article className="step-card">
                <span>03</span>
                <h3>Connect confidently</h3>
                <p>
                  Use connected verification services when they
                  become available.
                </p>
              </article>
            </div>

            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => navigate("services")}
              >
                Discover services ↗
              </button>

              <button
                className="secondary-link"
                onClick={() => navigate("gift-card")}
              >
                Verify a gift card →
              </button>
            </div>
          </section>
        </main>
      )}

      {/* SERVICES */}
      {page === "services" && (
        <main className="inner-page">
          <section className="inner-hero">
            <p className="section-eyebrow">WHAT CARDSPACE OFFERS</p>
            <h1>
              Your identity.
              <br />
              <span>More connected.</span>
            </h1>
            <p className="hero-description">
              Explore the services designed to make your digital
              identity and verification experience more convenient.
            </p>
          </section>

          <section className="service-grid">
            <article className="feature-card">
              <span className="feature-icon">✳</span>
              <h3>Digital business cards</h3>
              <p>
                Bring your name, professional role, contact details,
                and links together in one shareable profile.
              </p>
              <button
                className="service-link"
                onClick={() => navigate("contact")}
              >
                Learn more ↗
              </button>
            </article>

            <article className="feature-card">
              <span className="feature-icon">◇</span>
              <h3>Identity verification</h3>
              <p>
                Access the identity verification interface. Actual
                checks require a connected verification provider.
              </p>
              <button
                className="service-link"
                onClick={() => navigate("verify")}
              >
                Verify identity ↗
              </button>
            </article>

            <article className="feature-card gift-service-card">
              <span className="feature-icon">▣</span>
              <h3>Gift card verification</h3>
              <p>
                Open the gift card verification form to select a card
                type and enter its details.
              </p>
              <button
                className="service-link"
                onClick={() => navigate("gift-card")}
              >
                Verify gift card ↗
              </button>
            </article>

            <article className="feature-card">
              <span className="feature-icon">✉</span>
              <h3>Customer support</h3>
              <p>
                Have a question or need assistance? Get in touch
                with the Cardspace team.
              </p>
              <button
                className="service-link"
                onClick={() => navigate("contact")}
              >
                Contact us ↗
              </button>
            </article>
          </section>

          <section className="cta-panel">
            <p className="section-eyebrow">NEED HELP?</p>
            <h2>
              We're here to <span>help.</span>
            </h2>
            <p>
              Contact us if you have questions about Cardspace.
            </p>
            <button
              className="primary-btn"
              onClick={() => navigate("contact")}
            >
              Contact us ↗
            </button>
          </section>
        </main>
      )}

      {/* IDENTITY VERIFICATION */}
      {page === "verify" && (
        <main className="inner-page verification-page">
          <section className="verify-card">
            <div className="auth-brand-mark">cs.</div>
            <p className="section-eyebrow">IDENTITY VERIFICATION</p>

            <h1>
              Trust starts
              <br />
              <span>with identity.</span>
            </h1>

            <p className="auth-description">
              Enter a verification reference to explore the
              Cardspace identity verification interface.
            </p>

            <form onSubmit={handleVerify}>
              <label htmlFor="verification-reference">
                Verification reference
                <input
                  id="verification-reference"
                  type="text"
                  placeholder="e.g. CS-123456"
                  value={reference}
                  onChange={(event) => {
                    setReference(event.target.value);
                    setNotice("");
                  }}
                  autoComplete="off"
                  required
                />
              </label>

              <button className="primary-btn full-width" type="submit">
                Check reference ↗
              </button>
            </form>

            {notice && (
              <p className="notice" role="status">
                {notice}
              </p>
            )}

            <div className="verification-info">
              <span className="gold-star">✦</span>
              <div>
                <h3>Your privacy matters</h3>
                <p>
                  Never enter passwords, bank details, or sensitive
                  identity documents into this demo.
                </p>
              </div>
            </div>

            <p className="auth-footnote">
              Demo only. Real identity checks are not connected.
            </p>

            <button
              className="text-button"
              onClick={() => navigate("gift-card")}
            >
              Looking for gift card verification? Try it here ↗
            </button>
          </section>
        </main>
      )}

      {/* GIFT CARD VERIFICATION */}
      {page === "gift-card" && (
        <main className="inner-page gift-page">
          <section className="inner-hero">
            <p className="section-eyebrow">CARDSPACE GIFT CARD TOOLS</p>
            <h1>
              Check your card.
              <br />
              <span>Know what comes next.</span>
            </h1>
            <p className="hero-description">
              Select your gift card type and enter its details to
              explore the verification interface.
            </p>
          </section>

          <section className="gift-layout">
            <div className="gift-intro">
              <div className="gift-art">
                <div className="gift-art-glow" />
                <div className="gift-illustration">
                  <span className="gift-brand">cs.</span>
                  <span className="gift-symbol">✳</span>
                  <span className="gift-card-label">GIFT CARD</span>
                  <span className="gift-card-caption">
                    A little something for you.
                  </span>
                </div>
                <div className="gift-floating-tag">
                  <span>✦</span> GIFT CARD TOOLS
                </div>
              </div>

              <h2>
                Gift card verification,
                <br />
                made <span>simple.</span>
              </h2>

              <p>
                Choose your card type to begin. Cardspace must be
                connected to the relevant provider before it can
                confirm a card's validity or balance.
              </p>

              <div className="gift-benefit">
                <span>01</span>
                <div>
                  <h3>Select your card</h3>
                  <p>Choose the gift card brand you want to check.</p>
                </div>
              </div>

              <div className="gift-benefit">
                <span>02</span>
                <div>
                  <h3>Enter the required details</h3>
                  <p>
                    Follow the official provider's instructions
                    when verification is connected.
                  </p>
                </div>
              </div>
            </div>

            <div className="gift-form-card">
              <div className="gift-form-icon">▣</div>
              <p className="section-eyebrow">GIFT CARD CHECK</p>
              <h2>Verify a gift card</h2>
              <p className="gift-form-description">
                Enter the information requested below.
              </p>

              <form onSubmit={handleGiftCardVerify}>
                <label htmlFor="gift-card-type">
                  Gift card brand
                  <select
                    id="gift-card-type"
                    value={giftCardType}
                    onChange={(event) => {
                      setGiftCardType(event.target.value);
                      setNotice("");
                    }}
                  >
                    <option value="Amazon">Amazon</option>
                    <option value="Apple">Apple</option>
                    <option value="Google Play">Google Play</option>
                    <option value="Steam">Steam</option>
                    <option value="iTunes">iTunes</option>
                    <option value="PlayStation">PlayStation</option>
                    <option value="Xbox">Xbox</option>
                    <option value="Other">Other gift card</option>
                  </select>
                </label>

                <label htmlFor="gift-card-number">
                  Gift card number or reference
                  <input
                    id="gift-card-number"
                    type="text"
                    placeholder="Enter a demo reference only"
                    value={giftCardNumber}
                    onChange={(event) => {
                      setGiftCardNumber(event.target.value);
                      setNotice("");
                    }}
                    autoComplete="off"
                    required
                  />
                </label>

                <div className="gift-safety-note">
                  <span>ⓘ</span>
                  <p>
                    This demo cannot check card validity or balance.
                    Do not enter actual gift card codes or PINs.
                  </p>
                </div>

                <button className="primary-btn full-width" type="submit">
                  Check gift card <span>↗</span>
                </button>
              </form>

              {notice && (
                <p className="notice" role="status">
                  {notice}
                </p>
              )}

              <p className="auth-footnote">
                No card balance is retrieved and no transaction is
                performed by this demo.
              </p>
            </div>
          </section>

          <section className="gift-help">
            <div>
              <span className="feature-icon">✉</span>
              <h3>Need help?</h3>
              <p>
                Contact us with questions about the gift card
                verification service.
              </p>
            </div>

            <button
              className="outline-btn"
              onClick={() => navigate("contact")}
            >
              Contact support ↗
            </button>
          </section>
        </main>
      )}

      {/* CONTACT US */}
      {page === "contact" && (
        <main className="inner-page contact-page">
          <section className="inner-hero">
            <p className="section-eyebrow">WE'RE HERE TO HELP</p>
            <h1>
              Let's start a
              <br />
              <span>conversation.</span>
            </h1>
            <p className="hero-description">
              Have a question about Cardspace? Send us a message
              and tell us how we can help.
            </p>
          </section>

          <section className="contact-layout">
            <div className="contact-details">
              <p className="section-eyebrow">GET IN TOUCH</p>
              <h2>
                We'd love to
                <br />
                hear from you.
              </h2>

              <p className="contact-intro">
                Whether you need assistance with a service or want
                to learn more about Cardspace, we're happy to hear
                from you.
              </p>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">✉</div>
                <div>
                  <h3>Email us</h3>
                  <p>Questions and enquiries</p>
                  <a href="mailto:hello@cardspace.com">
                    hello@cardspace.com
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">◇</div>
                <div>
                  <h3>Service support</h3>
                  <p>
                    Tell us what you need help with so we can
                    direct your enquiry appropriately.
                  </p>
                </div>
              </div>

              <div className="contact-note">
                <span>✦</span>
                <p>
                  Your questions matter. We're building Cardspace
                  to make digital connections simpler.
                </p>
              </div>
            </div>

            <div className="contact-form-card">
              <h2>Send us a message</h2>
              <p className="contact-form-description">
                Fill in the details below to get in touch.
              </p>

              <form onSubmit={handleContactSubmit}>
                <div className="contact-input-row">
                  <label htmlFor="contact-name">
                    Full name
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Your full name"
                      value={contactForm.name}
                      onChange={(event) =>
                        setContactForm({
                          ...contactForm,
                          name: event.target.value,
                        })
                      }
                      required
                    />
                  </label>

                  <label htmlFor="contact-email">
                    Email address
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="you@example.com"
                      value={contactForm.email}
                      onChange={(event) =>
                        setContactForm({
                          ...contactForm,
                          email: event.target.value,
                        })
                      }
                      required
                    />
                  </label>
                </div>

                <label htmlFor="contact-subject">
                  Subject
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="What is your message about?"
                    value={contactForm.subject}
                    onChange={(event) =>
                      setContactForm({
                        ...contactForm,
                        subject: event.target.value,
                      })
                    }
                    required
                  />
                </label>

                <label htmlFor="contact-message">
                  Your message
                  <textarea
                    id="contact-message"
                    placeholder="Tell us how we can help..."
                    rows={5}
                    value={contactForm.message}
                    onChange={(event) =>
                      setContactForm({
                        ...contactForm,
                        message: event.target.value,
                      })
                    }
                    required
                  />
                </label>

                <button
                  className="primary-btn contact-submit"
                  type="submit"
                >
                  Send message <span>↗</span>
                </button>

                {contactNotice && (
                  <p className="contact-success" role="status">
                    <span>✓</span> {contactNotice}
                  </p>
                )}
              </form>

              <p className="contact-privacy">
                Please don't include passwords, gift card PINs,
                or sensitive identity documents in your message.
              </p>
            </div>
          </section>
        </main>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <button
          className="logo"
          onClick={() => navigate("home")}
          aria-label="Cardspace home"
        >
          card<span>space</span><b>.</b>
        </button>

        <p>Your identity deserves better.</p>

        <div className="footer-links">
          <button onClick={() => navigate("home")}>Home</button>
          <button onClick={() => navigate("services")}>Services</button>
          <button onClick={() => navigate("verify")}>Verify ID</button>
          <button onClick={() => navigate("gift-card")}>
            Gift Cards
          </button>
          <button onClick={() => navigate("contact")}>Contact Us</button>
        </div>

        <span>© {new Date().getFullYear()} Cardspace</span>
      </footer>
    </div>
  );
}

export default App;
