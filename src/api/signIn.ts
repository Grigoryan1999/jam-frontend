import { ISignIn } from './../entities';
import { API_URL } from "./index";
import api from ".";
import { Action } from 'redux';

export interface ISignInAction extends Action {
  body: ISignIn
}

export default async function signIn(body: ISignIn) {
  return (await api.post(`${API_URL}/user/login`, body)).data;
}
