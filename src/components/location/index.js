import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="Map to Arlene Schitzer Concert Hall"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11182.594363759385!2d-122.6815152!3d45.5171522!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e19040a2ae4ed89!2sArlene+Schnitzer+Concert+Hall!5e0!3m2!1sen!2sus!4v1543278758193"
        width="100%"
        height="500px"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
