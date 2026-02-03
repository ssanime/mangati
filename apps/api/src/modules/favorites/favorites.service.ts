import { Injectable } from "@nestjs/common";

@Injectable()
export class FavoritesService {
  add(payload: { userId: string; mangaId: string }) {
    return {
      message: "Added to favorites",
      payload
    };
  }
}
