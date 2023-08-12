import { api } from '../index'
import * as type from './types'

// 手机登录接口
export function phoneLogin(data: type.PhoneLoginData) {
  return api.post<type.PhoneLoginRes>('/user/login', data)
}

// 游客登录接口
export function touristLogin() {
  return api.post<type.TouristLoginRes>('/register/anonimous')
}