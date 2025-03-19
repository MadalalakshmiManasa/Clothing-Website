

// import React from "react";
// import '../styles/Footers.css';


// const Footers = () => {
//   return (
//     <footer className="footer">
//       <p>© 2025 MS BRAND FASHION. All rights reserved.</p>
//       <div className="footer-links">
//         <a href="#">Privacy Policy</a>
//         <a href="#">Terms of Service</a>
//         <a href="#">Contact</a>
//       </div>
//     </footer>
//   );
// };

// export default Footers;
// import React from "react";
// import '../styles/Footers.css';
// import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

// const Footers = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-brand">
//           <h2>MS BRAND FASHION</h2>
//           <p>Bringing you the latest trends in fashion with quality and style. Experience luxury, comfort, and elegance in every piece.</p>
//         </div>
//         <div className="footer-links">
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms of Service</a>
//           <a href="#">Contact</a>
//         </div>
//         <div className="footer-contact">
//           <p>Email: contact@msbrandfashion.com</p>
//           <p>Phone: +123 456 7890</p>
//         </div>
//         <div className="footer-social">
//           <a href="#"><FaFacebook /></a>
//           <a href="#"><FaInstagram /></a>
//           <a href="#"><FaTwitter /></a>
//           <a href="mailto:contact@msbrandfashion.com"><FaEnvelope /></a>
//         </div>
//       </div>
//       <p className="footer-copy">© 2025 MS BRAND FASHION. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footers;
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footers = () => {
  const footerStyle = {
    backgroundColor: "#222", // Dark theme like Navbar
    color: "white",
    padding: "30px 20px",
    textAlign: "center",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "auto",
    padding: "10px 20px",
  };

  const brandStyle = {
    flex: "1 1 300px",
    textAlign: "left",
    minWidth: "250px",
  };

  const linkStyle = {
    display: "block",
    color: "#ffcc00",
    textDecoration: "none",
    margin: "5px 0",
    fontSize: "14px",
    transition: "color 0.3s",
  };

  const socialIconStyle = {
    color: "white",
    fontSize: "20px",
    margin: "0 10px",
    transition: "transform 0.3s ease, color 0.3s ease",
  };

  const flexCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Brand Section */}
        <div style={brandStyle}>
          <h2 style={{ color: "#ffcc00" }}>MS BRAND FASHION</h2>
          <p style={{ fontSize: "14px", lineHeight: "1.5", color: "#ccc" }}>
            Bringing you the latest trends in fashion with quality and style.
            Experience luxury, comfort, and elegance in every piece.
          </p>
        </div>

        {/* Links Section */}
        <div style={{ flex: "1 1 200px", textAlign: "center", minWidth: "200px" }}>
          <a href="#" style={linkStyle}>Privacy Policy</a>
          <a href="#" style={linkStyle}>Terms of Service</a>
          <a href="#" style={linkStyle}>Contact</a>
        </div>

        {/* Contact Info Section */}
        <div style={{ flex: "1 1 200px", textAlign: "right", minWidth: "200px" }}>
          <p style={{ fontSize: "14px", color: "#ccc" }}>Email: contact@msbrandfashion.com</p>
          <p style={{ fontSize: "14px", color: "#ccc" }}>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Social Media Section */}
      <div style={{ ...flexCenter, marginTop: "15px" }}>
        <a href="#" style={{ ...socialIconStyle, fontSize: "24px" }}><FaFacebook /></a>
        <a href="#" style={{ ...socialIconStyle, fontSize: "24px" }}><FaInstagram /></a>
        <a href="#" style={{ ...socialIconStyle, fontSize: "24px" }}><FaTwitter /></a>
        <a href="mailto:contact@msbrandfashion.com" style={{ ...socialIconStyle, fontSize: "24px" }}><FaEnvelope /></a>
      </div>

      <p style={{ marginTop: "15px", fontSize: "14px", color: "#aaa" }}>
        © 2025 MS BRAND FASHION. All rights reserved.
      </p>
    </footer>
  );
};

export default Footers;


