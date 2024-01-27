import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabaseUrl: string;
  private supabaseAnonKey: string;
  public supabase: SupabaseClient;

  constructor() {
    this.supabaseUrl = process.env.SUPABASE_URL;
    this.supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

    if (!this.supabaseUrl || !this.supabaseAnonKey) {
      throw new Error('Missing Supabase credentials');
    }

    this.supabase = createClient(this.supabaseUrl, this.supabaseAnonKey);
  }
}
