import { apiRequester } from './api-requester'
import { SingleApiResult, User } from '@lutos-frontend/data-contract'

const callApi = apiRequester('/api/v1/user')

export const whoAmI = async() =>
  await callApi<SingleApiResult<User>>('/profile')
