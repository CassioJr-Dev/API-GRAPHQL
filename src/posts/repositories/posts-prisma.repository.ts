import { PrismaService } from '@/database/prisma/prisma.service'
import { Post } from '../graphql/models/post'
import { IPostRepository } from '../interfaces/posts.repository'

export class PostsPrismaRepository implements IPostRepository {
  constructor(private prismaService: PrismaService) {}

  create(data: Omit<Post, 'id'>): Promise<Post> {
    throw new Error('Method not implemented.')
  }
  update(post: Post): Promise<Post> {
    throw new Error('Method not implemented.')
  }
  findById(id: string): Promise<Post> {
    throw new Error('Method not implemented.')
  }
  findBySlug(slug: string): Promise<Post> {
    throw new Error('Method not implemented.')
  }
  get(id: string): Promise<Post> {
    throw new Error('Method not implemented.')
  }
}
