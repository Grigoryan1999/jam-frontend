import { ISignUp } from './../entities';
import { API_URL } from "./index";
import api from ".";
import { Action } from 'redux';

export interface ISignUpAction extends Action {
  body: ISignUp
}

export default async function signUp(body: ISignUp) {
  return (await api.post(`${API_URL}/user/registration`, body)).data;
}
