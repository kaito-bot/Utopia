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
import { useSelector } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = () => {
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

export default Header;
