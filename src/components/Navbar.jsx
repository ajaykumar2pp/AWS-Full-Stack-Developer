import React from "react";

const Navbar = () => {
  const links = [
    { href: "https://aws.amazon.com/documentation-overview/", label: "AWS Docs" },
    { href: "https://docs.aws.amazon.com/", label: "AWS Documentation" },
    { href: "https://calculator.aws/#/", label: "Pricing Calculator" },
    { href: "https://aws.amazon.com/free/", label: "AWS Free Tier" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary shadow">
      <div className="container">
        {/* Left Side Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
            alt="AWS Logo"
            draggable="false"
            onError={(e) => (e.target.src = "/path-to-fallback-logo.png")}
            style={{ height: "30px" }}
          />
        </a>

        {/* Toggler for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map((link, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link fw-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
