import { IAuth } from './../reducers/auth';
import { call, put } from "redux-saga/effects";
import getUserInfo from "../../api/getUserInfo";
import signIn, { ISignInAction } from "../../api/signIn";
import { IAuthorization, IUser, Response } from "../../entities";
import { setUserInfo, AuthError } from '../actions/actionCreators';

export function* workerSignIn(action?: ISignInAction): Generator {
  try {
    if(action?.body) {
      const token = (yield call(signIn, action.body)) as IAuthorization;
      localStorage.setItem('token', token.accessToken);
    }

    const userInfo = (yield call(getUserInfo)) as Response<IUser>;
    const auth: IAuth = {
      accessToken: localStorage.getItem('token'),
      ...userInfo.message,
      role: userInfo.message.role.name,
    }

    yield put(setUserInfo(auth));
  } catch (e) {
    if(action?.body) {
      yield put(AuthError('Неверный логин или пароль'));
    }
  }
}
