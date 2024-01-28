import { Module, Global } from '@nestjs/common';
import { SupabaseService } from './supabase/supabase.service';

@Global()
@Module({
  providers: [SupabaseService],
  exports: [SupabaseService],
})
export class SharedModule {}
