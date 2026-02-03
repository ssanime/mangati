import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ThrottlerModule } from "@nestjs/throttler";
import { AuthModule } from "./modules/auth/auth.module";
import { MangaModule } from "./modules/manga/manga.module";
import { ChaptersModule } from "./modules/chapters/chapters.module";
import { UsersModule } from "./modules/users/users.module";
import { AdminModule } from "./modules/admin/admin.module";
import { CommentsModule } from "./modules/comments/comments.module";
import { ReaderModule } from "./modules/reader/reader.module";
import { SearchModule } from "./modules/search/search.module";
import { StorageModule } from "./modules/storage/storage.module";
import { RatingModule } from "./modules/rating/rating.module";
import { FavoritesModule } from "./modules/favorites/favorites.module";
import { FollowModule } from "./modules/follow/follow.module";
import { ProfileModule } from "./modules/profile/profile.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([
      {
        ttl: 60,
        limit: 30
      }
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      playground: true
    }),
    AuthModule,
    UsersModule,
    MangaModule,
    ChaptersModule,
    CommentsModule,
    ReaderModule,
    SearchModule,
    StorageModule,
    RatingModule,
    FavoritesModule,
    FollowModule,
    ProfileModule,
    AdminModule
  ]
})
export class AppModule {}
