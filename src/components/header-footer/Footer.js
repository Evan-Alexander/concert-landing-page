import React from "react";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <footer>
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">
          The Genrose Concert Hall
        </div>
        <div className="footer_copyright">2018 All Rights Reserved</div>
      </Fade>
    </footer>
  );
}

export default Footer;
