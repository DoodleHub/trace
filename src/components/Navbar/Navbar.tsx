import Logo from "../../assets/images/logo.svg";
import { Button } from "../Button/Button";
import { Wrapper, Brand, NavLinks, ButtonContainer } from "./Navbar.styles";

const NAV_LINKS = [
  {
    label: "Home",
    url: "#",
  },
  {
    label: "Discover",
    url: "#",
  },
  {
    label: "Activities",
    url: "#",
  },
  {
    label: "About",
    url: "#",
  },
  {
    label: "Contact",
    url: "#",
  },
];

export const Navbar = () => {
  return (
    <Wrapper>
      <Brand>
        <img src={Logo} alt="logo" width={18} height={18} />
        Trace
      </Brand>
      <NavLinks>
        {NAV_LINKS.map((link) => (
          <a href={link.url}>{link.label}</a>
        ))}
      </NavLinks>
      <ButtonContainer>
        <Button appearance="secondary">Register</Button>
        <Button appearance="primary">Sign In</Button>
      </ButtonContainer>
    </Wrapper>
  );
};
