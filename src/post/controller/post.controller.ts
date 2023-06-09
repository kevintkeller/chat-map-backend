import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostService } from '../service/post.service';
import { UserPost } from '../models/post.interface';
import { Observable, catchError, map, of } from 'rxjs';
import { PostEntity } from '../models/post.entity';

@Controller('post')
export class PostController {

    constructor(private postService: PostService){}

    // create post (still need to create it in thes service)
    @Post()
    create(@Body()post: UserPost): Observable<UserPost | Object> {
        return this.postService.create(post).pipe(
            map((post: UserPost) => post),
            catchError(err => of({error: err.message}))
        );
    }

    @Get()
    findAll(): Observable<PostEntity[]> {
        return this.postService.findAll();
    }

    // need another for delete
    @Delete(':postId')
    deleteOne(@Param('postId')postId: string): Observable<UserPost> {
        return this.postService.deleteOne(Number(postId));
    }
}
