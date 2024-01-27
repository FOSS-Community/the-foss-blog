import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';

@Injectable()
export class PostsService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async createPost(
    title: string,
    content: string,
    authorId: string,
  ): Promise<any> {
    const { data, error } = await this.supabaseService.supabase
      .from('posts')
      .insert([{ title, content, authorId }]);

    if (error) throw new Error(error.message);
    return data;
  }

  async findAll(): Promise<any[]> {
    const { data, error } = await this.supabaseService.supabase
      .from('posts')
      .select('*');

    if (error) throw new Error(error.message);
    return data;
  }
}
