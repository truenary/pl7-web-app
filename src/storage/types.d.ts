export declare interface IStorageClient {
 getAccessToken(): Promise<string | null>;
  setAccessToken(accessToken: string): Promise<void>;
  clearTokens(): Promise<void>;
}
