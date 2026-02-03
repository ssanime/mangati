import { Injectable } from "@nestjs/common";

@Injectable()
export class StorageService {
  getUploadUrl(path: string) {
    return {
      path,
      url: `https://storage.example.com/${path}`
    };
  }
}
