import { environment } from '../../environments/environment'
import axios, { Method, ResponseType } from 'axios'

const createApiUrl = (pattern: string) => `${environment.apiUrl}/${pattern}`

export type ApiRequestOption = {
  method: Method,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any,
  responseType?: ResponseType
}

export const apiRequester = (baseUrl: string) => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return async <T = any>(url: string, options?: ApiRequestOption) =>
    await axios.request<T>({
      url: createApiUrl(baseUrl + url),
      method: options ? options.method : 'get',
      data: options ? options.body : undefined,
      responseType: options ? options.responseType : 'json'
    })
    .then(res => res.data)
}
