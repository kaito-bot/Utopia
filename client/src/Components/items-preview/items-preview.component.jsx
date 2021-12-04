import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./items-preview.styling.scss";
import CustomButton from "../custom-button/customButton.component";

const ItemsPreview = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <CustomButton
        className="custom-button"
        inverted
        onClick={() => addItem(item)}
      >
        Add to cart
      </CustomButton>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => {
    dispatch(addItem(item));
  },
});
export default connect(null, mapDispatchToProps)(ItemsPreview);
