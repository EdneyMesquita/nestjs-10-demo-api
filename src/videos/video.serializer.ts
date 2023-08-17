import { Category, Video } from '@prisma/client';
import { basename } from 'path';

export class VideoSerializer {
  public id: number;
  public title: string;
  public description: string;
  public category: {
    id: number;
    name: string;
    description?: string | null;
  };
  public file_url: string;

  constructor(video: Video & { category: Category }) {
    this.id = video.id;
    this.title = video.title;
    this.description = video.description;
    this.category = video.category;
    this.file_url =
      'http://localhost:3000/videos/file/' + basename(video.file_path);
  }
}
