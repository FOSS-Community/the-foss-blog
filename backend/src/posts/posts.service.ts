import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async createPost(createPostDto: CreatePostDTO): Promise<any> {
    try {
      const { data, error } = await this.supabaseService.supabase
        .from('Posts')
        .insert([createPostDto]);

      if (error) {
        console.error('Error creating post:', error);
        throw new Error(error.message);
      }
      return data;
    } catch (err) {
      console.error('Unexpected error:', err);
      throw new Error('Internal Server Error');
    }
  }

  async findAll(): Promise<any[]> {
    try {
      const { data, error } = await this.supabaseService.supabase
        .from('Posts')
        .select('*');

      if (error) {
        console.error('Error fetching posts:', error);
        throw new Error(error.message);
      }
      return data;
    } catch (err) {
      console.error('Unexpected error:', err);
      throw new Error('Internal Server Error');
    }
  }
}
