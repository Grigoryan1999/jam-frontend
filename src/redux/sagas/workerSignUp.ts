import { call, put } from "redux-saga/effects";
import signUp, { ISignUpAction } from "../../api/signUp";
import { AuthError, setActivationRequired } from "../actions/actionCreators";

export function* workerSignUp(action: ISignUpAction): Generator {
  try {
    yield call(signUp, action.body);
    yield put(setActivationRequired());
  } catch (e) {
    yield put(AuthError('Email или логин заняты'));
  }
}
