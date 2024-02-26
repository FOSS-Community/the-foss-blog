import { Controller, Post, Get, Delete, Body, Param, UseGuards, HttpStatus, HttpCode } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommentsService } from './comments.service';
import { CreateCommentDTO } from './dto/create-comment-dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async add(@Body() createCommentDTO: CreateCommentDTO): Promise<any> {
    return this.commentsService.addComment(createCommentDTO);
  }

  @Get('post/:postId')
  async findByPostId(@Param('postId') postId: string): Promise<any[]> {
    return this.commentsService.findByPostId(postId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':commentId')
  async delete(@Param('commentId') commentId: string, @Param('userId') userId: string): Promise<any> {
    return this.commentsService.deleteComment(commentId, userId);
  }
}
