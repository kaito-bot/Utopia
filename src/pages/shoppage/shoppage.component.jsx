import React, { Component } from "react";
import SHOP_DATA from "./shoppage.data";
class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = SHOP_DATA;
  }
  render() {
    return(<div className="shoppage">
        this is shop page
    </div>)
  }
}

export default ShopPage;
