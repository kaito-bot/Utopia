import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  NavigationContainer,
  OptionDiv,
  OptionLink,
} from "./header.styling";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { clearCartOnSignout } from "../../redux/cart/cart.actions";

const Header = ({ clearOnSignout }) => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  return (
    <HeaderContainer>
      <div>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
      </div>
      <NavigationContainer>
        <OptionLink to="/shop">SHOP</OptionLink>

        {currentUser ? (
          <OptionDiv
            onClick={() => {
              auth.signOut();
              clearOnSignout();
              console.log("i am clicked");
            }}
          >
            SIGN OUT
          </OptionDiv>
        ) : (
          <OptionLink to="/signIn">SIGN IN</OptionLink>
        )}
        <OptionDiv>
          <CartIcon />
        </OptionDiv>
      </NavigationContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearOnSignout: () => dispatch(clearCartOnSignout()),
});
export default connect(null, mapDispatchToProps)(Header);
