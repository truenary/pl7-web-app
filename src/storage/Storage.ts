// LocalStorageClient.ts
import { IStorageClient } from "./types";

export class LocalStorageClient implements IStorageClient {
  async setAccessToken(accessToken: string): Promise<void> {
    localStorage.setItem("accessToken", accessToken);
  }

  async getAccessToken(): Promise<string | null> {
    return localStorage.getItem("accessToken");
  }

  async clearTokens(): Promise<void> {
    localStorage.removeItem("accessToken");
  }
}
