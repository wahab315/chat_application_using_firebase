import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        {/* <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button> */}
      </div>
    </div>
  );
};

export default Navbar;
