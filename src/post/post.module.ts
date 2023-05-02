import { Module } from '@nestjs/common';
import { PostController } from './controller/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './models/post.entity';
import { PostService } from './service/post.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity])
  ],
  providers: [PostService],
  controllers: [PostController]
})
export class PostModule {}
