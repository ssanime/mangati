import { Injectable } from "@nestjs/common";

@Injectable()
export class ReaderService {
  saveProgress(payload: { userId: string; chapterId: string; page: number }) {
    return {
      message: "Progress saved",
      payload
    };
  }
}
