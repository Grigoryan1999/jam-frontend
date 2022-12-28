import { FC } from "react";
import { BigTitle } from "../../global";
import { LandingHeader } from "./components/LandingHeader/LandingHeader";
import { MenuComponent } from "../../components/MenuComponent/MenuComponent";

export const LandingPage: FC = () => {
  return (
    <>
      <LandingHeader />
      <BigTitle>Наше меню</BigTitle>
      <MenuComponent />
    </>
  );
};
