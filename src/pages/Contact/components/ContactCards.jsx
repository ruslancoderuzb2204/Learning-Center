import React from "react";

const ContactCards = ({ icon, text }) => {
  return (
    <div className="p-6 border text-center rounded-md">
      <p className="mb-2">{icon}</p>
      <p>{text}</p>
    </div>
  );
};

export default ContactCards;
