import { Injectable } from '@nestjs/common';
import * as toStream from 'buffer-to-stream';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import config from 'src/config';

@Injectable()
export class CloudinaryService {
  private baseFolder: string;

  constructor() {
    this.baseFolder = `unislides/${config.APP_ENV}`;
  }
  async uploadImage({
    file,
    folder = '',
    public_id,
  }: {
    file: Express.Multer.File;
    folder?: string;
    public_id: string;
  }): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        {
          folder: `${this.baseFolder}/${folder}`,
          public_id,
          resource_type: 'image',
        },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );
      toStream(file.buffer).pipe(upload);
    });
  }

  deleteImage({
    folder = '',
    public_id,
  }: {
    folder?: string;
    public_id: string;
  }) {
    return v2.uploader.destroy(`${this.baseFolder}/${folder}/${public_id}`, {
      resource_type: 'image',
    });
  }
}
