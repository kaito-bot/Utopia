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
          imageUrl:
            "https://images.unsplash.com/photo-1552060155-4eac706a5515?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80",
        },
        {
          title: "Jackets",
          id: 2,
          imageUrl:
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        },
        {
          title: "Sneakers",
          id: 3,
          imageUrl:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        },
        {
          title: "Womens",
          id: 4,
          size: "large",
          imageUrl:
            "https://images.unsplash.com/photo-1440186170739-681f007fc4d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        },
        {
          title: "Mens",
          id: 5,
          size: "large",
          imageUrl:
            "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
        },
      ],
    };
  }

  render() {
    return (
      <div className="menu">
        {this.state.menuItemName.map(({ title, id, imageUrl, size }) => {
          return (
            <MenuItems key={id} title={title} imageUrl={imageUrl} size={size} />
          );
        })}
      </div>
    );
  }
}

export default Menu;
