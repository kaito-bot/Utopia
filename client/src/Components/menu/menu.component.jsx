import React from "react";
import "./menu.styling.scss";
import MenuItems from "../menu-items/menu-items.component";
import { useSelector } from "react-redux";
import { selectMenuSections } from "../../redux/menu/menu.selectors";

const Menu = () => {
  const menuItemName = useSelector(selectMenuSections);
  return (
    <div className="menu">
      {menuItemName.map(({ id, ...otherProps }) => {
        return <MenuItems key={id} {...otherProps} />;
      })}
    </div>
  );
};

export default Menu;
