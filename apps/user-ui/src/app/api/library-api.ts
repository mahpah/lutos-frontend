import { apiRequester } from './api-requester'
import { ListApiResult, Book } from '@lutos-frontend/data-contract'

const callApi = apiRequester('/api/v1/library')

export const getOnHoldBooks = async () =>
  await callApi<ListApiResult<Book>>('/books/onHold')


export const getInMissionBooks = async () =>
  await callApi<ListApiResult<Book>>('/books/inMission')

export const getAll = async (skip: number, take: number) =>
  await callApi<ListApiResult<Book>>(`/books?skip=${skip}&take=${take}`)
