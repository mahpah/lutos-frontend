export type BaseApiResultMeta = {
  dateGenerated: Date
  version: string
}

export type ListApiResultMetadata = BaseApiResultMeta & {
  total: number
  skip: number
  length: number
}

export type ListApiResult<T> = {
  data: T[],
  metadata: ListApiResultMetadata
}

export type SingleApiResult<T> = {
  data: T
  metadata: BaseApiResultMeta
}

export type ErrorApiResult = {
  error: {
    [key: string]: string[]
  }
}

export type ApiResult<T> =
  | ListApiResult<T>
  | SingleApiResult<T>
  | ErrorApiResult
