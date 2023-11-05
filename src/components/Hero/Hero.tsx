import HeroImage from "../../assets/images/hero.svg";
import { Button } from "../Button/Button";
import { Wrapper, InputContainer } from "./Hero.styles";

export const Hero = () => {
  return (
    <Wrapper>
      <img src={HeroImage} height={500} />
      <InputContainer>
        <input type="text" placeholder="Trip name" />
        <input type="text" placeholder="Check in date" />
        <input type="text" placeholder="Check out date" />
        <Button appearance="primary">Create Trip</Button>
      </InputContainer>
    </Wrapper>
  );
};
