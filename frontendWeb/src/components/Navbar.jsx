import React from "react";


const Navbar = () => {
  return (
    <div id="navbar" className="full-screen flex-display navbar">
        <img
          className="auto-margin logo"
          src="https://www.zahironline.com/wp-content/uploads/2016/09/gadjian-logo-zahir-online-337x150.png"
          alt="gadjian"
        />
      <div className="auto-margin margin-horizontal-20 flex-display">
        <p>Hallo,</p>
        <p className="color-blue">Gadjian User</p>
        <img className="auto-margin image-headers" src="img_avatar.png" alt="Avatar"></img>
      </div>
    </div>
  );
};
export default Navbar;
