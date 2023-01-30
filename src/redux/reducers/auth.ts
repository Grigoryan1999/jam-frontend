import {
  SET_USER_INFO,
  SET_AUTH_ERROR,
  SET_ACTIVATION_REQUIRED,
} from "./../actions/actionsTypes";
import { AuthAction } from "../actions/actionCreators";

export interface IAuth {
  accessToken: string | null;
  email: string | null;
  name: string | null;
  login: string | null;
  role: string | null;
  authError?: string | null;
  activationRequired?: boolean;
}

const initial: IAuth = {
  accessToken: localStorage.getItem("token") ?? null,
  email: null,
  name: null,
  login: null,
  role: null,
  authError: null,
  activationRequired: false,
};

export function auth(state: IAuth = initial, action: AuthAction): IAuth {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.userInfo,
      };

    case SET_AUTH_ERROR:
      return {
        ...state,
        authError: action.errorTitle,
      };

    case SET_ACTIVATION_REQUIRED:
      return {
        ...state,
        activationRequired: true,
      };
    default:
      return state;
  }
}
