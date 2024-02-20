import { IStorageClient } from "@/storage/types";
import { IJsonApi, JsonAPIResp } from "./type";

export class API implements IJsonApi {
  private BASE_URL: string;
  private _localStorageClient: IStorageClient;

  constructor(baseUrl: string, localStorageClient: IStorageClient) {
    this.BASE_URL = baseUrl;
    this._localStorageClient = localStorageClient;
  }

  private _buildHeaders(headers: Map<string, string>): Headers {
    const _headers = new Headers();
    headers.forEach((value, key) => {
      _headers.append(key, value);
    });
    return _headers;
  }

  private async _parseResponse<T>(response: Response): Promise<JsonAPIResp<T>> {
    const json = await response.json();
    if (!response.ok) {
      throw new Error(json.message || "Failed to fetch data");
    }
    return json;
  }

  private async _request<T>(
    path: string,
    method: string,
    isAuthorized: boolean,
    headers: Map<string, string>,
    body?: FormData | null
  ): Promise<JsonAPIResp<T>> {
    // headers.set("Content-Type", "multipart/form-data");
    const _headers = this._buildHeaders(headers);

    if (isAuthorized) {
      const accessToken = await this._localStorageClient.getAccessToken();
      _headers.append("Authorization", `Bearer ${accessToken}`);
    }

    const requestOptions: RequestInit = {
      method: method,
      headers: _headers,
      body: body,
    };

    const url = `${this.BASE_URL}${path}`;
    const response = await fetch(url, requestOptions);

    return this._parseResponse<T>(response);
  }

  async get<T>(
    path: string,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = true
  ): Promise<JsonAPIResp<T>> {
    return this._request<T>(path, "GET", isAuthorized, headers);
  }

  async post<T>(
    path: string,
    body?: FormData | null,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = true
  ): Promise<JsonAPIResp<T>> {
    return this._request<T>(path, "POST", isAuthorized, headers, body);
  }

  async put<T>(
    path: string,
    body?: FormData | null,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = true
  ): Promise<JsonAPIResp<T>> {
    return this._request<T>(path, "PUT", isAuthorized, headers, body);
  }

  async delete(
    path: string,
    headers: Map<string, string> = new Map(),
    isAuthorized: boolean = true
  ): Promise<JsonAPIResp<undefined>> {
    return this._request(path, "DELETE", isAuthorized, headers);
  }
}
