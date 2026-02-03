import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminService {
  createManga(payload: { title: string; type: string }) {
    return {
      message: "Manga created",
      payload
    };
  }

  uploadChapter(payload: { mangaId: string; chapterNumber: number }) {
    return {
      message: "Chapter uploaded",
      payload
    };
  }
}
