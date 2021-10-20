import React from "react";
import "./menu.styling.scss";
import MenuItems from "../menu-items/menu-items.component";
import { connect } from "react-redux";
import { selectMenuSections } from "../../redux/menu/menu.selectors";

const Menu = ({ menuItemName }) => (
  <div className="menu">
    {menuItemName.map(({ id, ...otherProps }) => {
      return <MenuItems key={id} {...otherProps} />;
    })}
  </div>
);

const mapStateToProps = (state) => ({
  menuItemName: selectMenuSections(state),
});

export default connect(mapStateToProps)(Menu);
