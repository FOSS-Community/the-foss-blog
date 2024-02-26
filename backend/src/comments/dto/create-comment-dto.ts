import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDTO {
  @IsNotEmpty()
  @IsString()
  readonly postId: string;

  @IsNotEmpty()
  @IsString()
  readonly content: string;
}