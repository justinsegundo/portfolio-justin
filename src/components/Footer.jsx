import "../styles/footer.css";

const email = "justinian.segundo1@gmail.com";
const phone = "+639568854901";


const Footer = () => (
  <footer className="ft-root">
    <div className="ft-glow-line" />

    <div className="ft-bounded">
      <div className="ft-topbar">
        <div className="ft-topbar-col">
          <span className="ft-topbar-label ft-mono">Phone Number</span>
          <a
            href={`mailto:${phone}`}
            className="ft-topbar-value ft-topbar-link"
          >
            {phone}
          </a>
        </div>
        <div className="ft-topbar-col">
          <span className="ft-topbar-label ft-mono">Location</span>
          <span className="ft-topbar-value">Carmen, Cebu, Philippines</span>
        </div>

      </div>

      <div className="ft-divider" />

      <div className="ft-main">
        <div className="ft-identity">
          <div className="ft-logo">
            <img
              src="/images/logo-justin.png"
              alt="Justin Ian Segundo logo"
              className="ft-logo-img"
            />
          </div>
          <div className="ft-identity-text">
            <p className="ft-name">Justin Ian Segundo</p>
            <p className="ft-tagline">
              Full Stack Developer building production-focused systems, internal
              tools, and automation.
            </p>
          </div>
        </div>

        <div className="ft-cta">
          <span className="ft-cta-label ft-mono">
            Let's Work Together
          </span>
          <a href={`mailto:${email}`} className="ft-cta-field ft-mono">
            <span className="ft-cta-email">{email}</span>
          </a>
         <a href={`mailto:${email}`} className="ft-cta-btn">
          <span className="ft-cta-btn-main">HIRE</span>
          <span className="ft-cta-btn-outline">ME!</span>
        </a>
        </div>
      </div>

      <div className="ft-bottom">
        <p className="ft-copy ft-mono">
          © 2026 All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
