import { Controller, Get, Post as HttpPost, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDTO } from './dto/create-post.dto'

@Controller('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.postsService.findAll();
  }

  @HttpPost()
  async create(@Body() createPostDto: CreatePostDTO): Promise<any> {
    return this.postsService.createPost(createPostDto);
  }
}
