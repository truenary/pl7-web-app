import { IStorageClient } from "@/storage/types";
import { IJsonApi, JsonAPIResp } from "./type";

export class API implements IJsonApi {
  private BASE_URL: string;
  private _localStorageClient: IStorageClient;
  constructor(baseUrl: string, localStorageClient: IStorageClient) {
    this.BASE_URL = baseUrl;
    this._localStorageClient = localStorageClient;
  }

  //building the headers
  private _buildHeaders(headers: Map<string, string>): Headers {
    const _headers = new Headers();
    headers.forEach((value, key) => {
      _headers.append(key, value);
    });
    return _headers;
  }
  private async _parseResponse<T>(response: Response): Promise<T> {
    if (response.ok) {
      if (response.status === 204) {
        return undefined as T;
      }
    }
    return response.json() as T;
  }
  // Makes an API call with provided request parameters
  private async _request<T>(
    path: string,
    method: string,
    isAuthorized: boolean,
    headers: Map<string, string>,
    body?: FormData | null
  ): Promise<JsonAPIResp<T>> {
    // headers.set("Content-Type", "multipart/form-data");
    const _headers = this._buildHeaders(headers);

    // Add authorization header if necessary
    if (isAuthorized) {
      const accessToken = await this._localStorageClient.getAccessToken();
      _headers.append("Authorization", `Bearer ${accessToken}`);
    }
    // Configure options for the request
    const requestOption: RequestInit = {
      method: method,
      headers: _headers,
    };
    // Add body to request options if it's not undefined
    if (body !== undefined && body !== null) {
      console.log("at api");
      for (const [key, value] of body) {
        console.log(`${key}: ${value}\n`);
      }
      requestOption.body = body;
    }
    // Make the request to the API
    const response = await fetch(`${this.BASE_URL}${path}`, requestOption);
    console.log(response);
    const apiResponse = await this._parseResponse<JsonAPIResp<T>>(response);
    return apiResponse;
  }

  get<T>(
    path: string,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = true
  ): Promise<JsonAPIResp<T>> {
    return this._request(path, "GET", isAuthorized, headers);
  }
  post<T>(
    path: string,
    body?: FormData | null,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = true
  ): Promise<JsonAPIResp<T>> {
    return this._request<T>(path, "POST", isAuthorized, headers, body);
  }
  put<T>(
    path: string,
    body?: FormData | null,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = true
  ): Promise<JsonAPIResp<T>> {
    return this._request<T>(path, "PUT", isAuthorized, headers, body);
  }
  delete(
    path: string,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = true
  ): Promise<JsonAPIResp<undefined>> {
    return this._request(path, "DELETE", isAuthorized, headers);
  }
}
