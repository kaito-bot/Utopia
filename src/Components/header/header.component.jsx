import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  NavigationContainer,
  OptionDiv,
  OptionLink,
} from "./header.styling";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <div>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
      </div>
      <NavigationContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/Contact">CONTACT</OptionLink>

        {currentUser ? (
          <OptionDiv
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to="/signIn">SIGN IN</OptionLink>
        )}

        <CartIcon />
      </NavigationContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};
const mapStatetoProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state),
});
export default connect(mapStatetoProps)(Header);
