import React, { Component } from "react";

// Complete this Component
const ListItem = ({ name, link, icon, bgColor }) => {
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor, // Set background color based on props
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 10px",
        marginBottom: 10,
        borderRadius: 5
      }}
    >
      {/* <img src="" alt="" />
      <a href=""></a>
    </div> */}
    <img
        src={icon} // Set image source based on props
        alt={name} // Set alt text based on props
        style={{ marginRight: 10, width: 20, height: 20 }} // Set image styles
      />
      <a
        href={link} // Set link based on props
        style={{ color: "inherit", textDecoration: "none" }} // Set link styles
      >
        {name} {/* Display name */}
      </a>
    </div>
  );
};

export default ListItem;
