import { useSelector } from "react-redux";
import { MenuComponent } from "../../components/MenuComponent/MenuComponent";
import { BigTitle } from "../../global";
import { authSelector } from "../../redux/selectors";

export const UserPage = () => {
  const auth = useSelector(authSelector);

  return (
    <>
      <BigTitle>Добро пожаловать, {auth.name}</BigTitle>
      <MenuComponent editable={true} />
    </>
  );
};
