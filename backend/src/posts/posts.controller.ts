import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDTO } from './dto/create-post.dto'; 
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('posts') 
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async findAll(): Promise<any[]> {
    return this.postsService.findAll();
  }

  @Post() 
  async create(@Body() createPostDto: CreatePostDTO): Promise<any> { 
    return this.postsService.createPost(createPostDto);
  }
}