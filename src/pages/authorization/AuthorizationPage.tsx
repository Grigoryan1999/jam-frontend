import { CircularProgress, InputLabel, TextField } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { authFormDefault } from "../../assets/defaultValues";
import { BigTitle, CenterWrapper, OrangeButton, PrimaryButton } from "../../global";
import { signIn, signUp } from "../../redux/actions/actionCreators";
import { authSelector } from "../../redux/selectors";
import {
  AuthorizationPageContainer,
  ButtonField,
} from "./AuthorizationPage.style";

export const AuthorizationPage: FC = () => {
  const [sighIn, setSignIn] = useState(true);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const auth = useSelector(authSelector);

  useEffect(() => {
    if (auth.authError) {
      toast.error(auth.authError);
    }
    setLoading(false);
  }, [auth]);

  const { register, handleSubmit } = useForm({ defaultValues: authFormDefault });

  const onSignInHandler = () => {
    setSignIn((prev) => !prev);
  };

  const onAuthorizationHandle = (authInfo: typeof authFormDefault) => {
    setLoading(true);
    if (sighIn) {
      dispatch(
        signIn({
          email: authInfo.email,
          password: authInfo.password,
        })
      );
    } else {
      if (authInfo.password !== authInfo.repeatePassword) {
        setLoading(false);
        return toast.error("Пароли не совпадают");
      }
      dispatch(
        signUp({
          email: authInfo.email,
          password: authInfo.password,
          name: authInfo.name,
          login: authInfo.login,
        })
      );
    }
  };

  return (
    <AuthorizationPageContainer onSubmit={handleSubmit(onAuthorizationHandle)}>
      <BigTitle>{sighIn ? "Вход" : "Регистрация"}</BigTitle>
      {!loading && (
        <>
          <InputLabel shrink htmlFor="email" margin="dense">
            Email
          </InputLabel>
          <TextField
            type={"email"}
            id="email"
            fullWidth
            margin="dense"
            {...register("email", { required: true })}
          />
          <InputLabel shrink htmlFor="password" margin="dense">
            Пароль
          </InputLabel>
          <TextField
            type={"password"}
            id="password"
            fullWidth
            margin="dense"
            {...register("password", { required: true, min: 8 })}
          />
          {!sighIn && (
            <>
              <InputLabel shrink htmlFor="repeat-password" margin="dense">
                Повторите пароль
              </InputLabel>
              <TextField
                type={"password"}
                id="repeat-password"
                fullWidth
                margin="dense"
                {...register("repeatePassword", { required: true })}
              />
              <InputLabel shrink htmlFor="login" margin="dense">
                Введите ваш логин
              </InputLabel>
              <TextField
                id="login"
                fullWidth
                margin="dense"
                {...register("login", { required: true })}
              />
              <InputLabel shrink htmlFor="name" margin="dense">
                Введите ваше ФИО
              </InputLabel>
              <TextField
                id="name"
                fullWidth
                margin="dense"
                {...register("name", { required: true })}
              />
            </>
          )}
          <ButtonField>
            <OrangeButton type="submit">
              {sighIn ? "Войти" : "Регистрация"}
            </OrangeButton>
            <PrimaryButton type="button" onClick={onSignInHandler}>
              {!sighIn ? "Войти" : "Регистрация"}
            </PrimaryButton>
          </ButtonField>
        </>
      )}
      {
        loading &&
        <CenterWrapper>
          <CircularProgress />
        </CenterWrapper>
      }
    </AuthorizationPageContainer>
  );
};
