import { AuthorOutput } from '@/authors/dto/author-output'
import { AuthorsPrismaRepository } from '../../repositories/authors-prisma.repository'

export namespace DeleteAuthor {
  export type Input = {
    id: string
  }

  export type Output = AuthorOutput

  export class UseCase {
    constructor(private authorsRepository: AuthorsPrismaRepository) {}

    async execute(input: Input): Promise<Output> {
      return this.authorsRepository.delete(input.id)
    }
  }
}
