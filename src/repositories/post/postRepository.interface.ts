import { UpdateResult } from 'typeorm';

import { IPost } from '../../entity';

export interface IPostRepository {
    getUserPostsByUserId(id: number): Promise<IPost[]>;
    updatePost(id: number, title: string, text: string): Promise<UpdateResult>;
}
