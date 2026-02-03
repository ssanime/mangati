import { Body, Controller, Post } from "@nestjs/common";
import { FavoritesService } from "./favorites.service";

@Controller("favorites")
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  add(@Body() payload: { userId: string; mangaId: string }) {
    return this.favoritesService.add(payload);
  }
}
