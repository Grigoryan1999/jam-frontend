import { useSelector } from "react-redux";
import { MenuComponent } from "../../components/MenuComponent/MenuComponent";
import { BigTitle } from "../../global";
import { authSelector } from "../../redux/selectors";
import { CategoryEditor } from "./components/CategoryEditor/CategoryEditor";
import { ProductEditor } from "./components/ProductEditor/ProductEditor";

export const UserPage = () => {
  const auth = useSelector(authSelector);

  return (
    <>
      <BigTitle>Добро пожаловать, {auth.name}</BigTitle>
      <CategoryEditor />
      <ProductEditor />
    </>
  );
};
