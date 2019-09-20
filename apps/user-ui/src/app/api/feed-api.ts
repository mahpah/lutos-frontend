import { apiRequester } from './api-requester'
import { ListApiResult, Story } from '@lutos-frontend/data-contract'

const callApi = apiRequester('api/v1/feed')

export const getMyFeed = async (fromToken?: string) =>
  await callApi<ListApiResult<Story>>(`?token=${fromToken}`)
