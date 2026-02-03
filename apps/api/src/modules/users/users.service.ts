import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  profile(id: string) {
    return {
      id,
      username: "reader",
      favorites: [],
      followList: []
    };
  }
}
