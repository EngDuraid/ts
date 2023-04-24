export interface Event {
  id: number;
  name: string;
  description: string;
}

export interface ApiResponse<T> {
  data: T;
  status: ResponseStatus;
}

export enum ResponseStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}
