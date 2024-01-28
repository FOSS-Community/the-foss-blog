import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module'; // Import PostsModule
import { SupabaseService } from './supabase/supabase.service';
import { SharedModule } from './shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make ConfigModule global
    }),
    PostsModule,
    SharedModule, 
  ],
  controllers: [AppController],
  providers: [AppService, SupabaseService],
})
export class AppModule {}
