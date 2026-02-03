import { Injectable } from "@nestjs/common";

@Injectable()
export class ChaptersService {
  list(mangaId: string) {
    return {
      mangaId,
      chapters: []
    };
  }
}
