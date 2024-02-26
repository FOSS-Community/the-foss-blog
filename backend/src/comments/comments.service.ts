import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateCommentDTO } from './dto/create-comment-dto';

@Injectable()
export class CommentsService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async addComment(createCommentDTO: CreateCommentDTO): Promise<any> {
    const { data, error } = await this.supabaseService.supabase
      .from('Comments')
      .insert([createCommentDTO]);

    if (error) throw new Error(`Failed to add comment: ${error.message}`);
    return data;
  }

  async findByPostId(postId: string): Promise<any[]> {
    const { data, error } = await this.supabaseService.supabase
      .from('Comments')
      .select('*')
      .eq('postId', postId);

    if (error) throw new Error(`Failed to retrieve comments for post ID ${postId}: ${error.message}`);
    return data;
  }

  async deleteComment(commentId: string, userId: string): Promise<any> {
    const { data, error } = await this.supabaseService.supabase
      .from('Comments')
      .delete()
      .match({ id: commentId, authorId: userId });

    if (error) throw new Error(`Failed to delete comment ID ${commentId}: ${error.message}`);
    return data;
  }
}
