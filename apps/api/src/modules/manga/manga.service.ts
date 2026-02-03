import { Injectable } from "@nestjs/common";

@Injectable()
export class MangaService {
  list() {
    return {
      items: [],
      message: "List of manga/manha/mahwa"
    };
  }

  detail(id: string) {
    return {
      id,
      title: "Sample Manga",
      status: "ongoing",
      type: "manhwa",
      country: "korea",
      genres: ["action", "fantasy"],
      summary: "Story summary"
    };
  }
}
