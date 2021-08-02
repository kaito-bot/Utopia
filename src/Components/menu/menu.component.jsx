import React from "react";
import "./menu.styling.scss";
import MenuItems from "../menu-items/menu-items.component";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItemName: [
        {
          title: "Hats",
          id: 1,
          imageUrl: "www.google.com",
        },
        {
          title: "Jackets",
          id: 2,
          imageUrl: "www.google.com",
        },
        {
          title: "Sneakers",
          id: 3,
          imageUrl: "www.google.com",
        },
        {
          title: "Womens",
          id: 4,
          imageUrl: "www.google.com",
        },
        {
          title: "Mens",
          id: 5,
          imageUrl: "www.google.com",
        },
      ],
    };
  }

  render() {
    return (
      <div className="menu">
        {this.state.menuItemName.map(({ title, id, imageUrl }) => {
          return <MenuItems key={id} title={title} imageUrl={imageUrl} />;
        })}
      </div>
    );
  }
}

export default Menu;
