export declare type JsonAPIObjectResp<T> = {
  data: T;
};
// https://jsonapi.org/format/#error-objects
declare type JsonAPIError = {
  status: string;
  title: string;
  detail: string?;
};
export declare type JsonAPIErrorResp = {
  errors?: JsonAPIError[];
  message: string;
  success: boolean;
};
export declare type JsonAPIResp<T> = JsonAPIObjectResp<T> | JsonAPIErrorResp;

//add isAuthorized option after complete backend api
declare interface IJsonApi {
  get<T>(
    path: string,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = true
  ): Promise<JsonAPIResp<T>>;

  post<T>(
    path: string,
    body: FormData | null,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = true
  ): Promise<JsonAPIResp<T>>;

  put<T>(
    path: string,
    body?: FormData | null,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = true
  ): Promise<JsonAPIResp<T>>;

  delete(
    path: string,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = true
  ): Promise<JsonAPIResp<undefined>>;
}
