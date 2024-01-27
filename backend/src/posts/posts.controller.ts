import { Controller, Get, Post as HttpPost, Body } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.postsService.findAll();
  }

  @HttpPost()
  async create(
    @Body() createPostDto: { title: string; content: string; authorId: string },
  ): Promise<any> {
    const { title, content, authorId } = createPostDto;
    return this.postsService.createPost(title, content, authorId);
  }
}
