import React from "react";
import ListItem from "./ListItem"; // Import the ListItem component

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "LinkedIn",
          link: "http://linkedin.com",
          icon: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
          bgColor: "#ff9580"
        },
        {
          id: 2,
          name: "GitHub",
          link: "https://github.com",
          icon: "https://cdn-icons-png.flaticon.com/128/3291/3291695.png",
          bgColor: "#f2faa6"
        },
        {
          id: 3,
          name: "Twitter",
          link: "https://twitter.com/",
          icon: "https://cdn-icons-png.flaticon.com/128/733/733579.png",
          bgColor: "#b8b3e8"
        }
      ]
    };
  }

  render() {
    const {data} = this.state;

    // Code here
    // Map over the data array and render ListItem component for each item
    const listItems = data.map(item => (
      <ListItem
        key={item.id} // Unique key for each ListItem
        name={item.name}
        link={item.link}
        icon={item.icon}
        bgColor={item.bgColor}
      />
    ));
    return <div className="List">{listItems}</div>; // Render the listItems array
  }
}

export default List;
