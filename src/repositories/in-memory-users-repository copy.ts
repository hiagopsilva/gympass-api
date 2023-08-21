import { Prisma } from '@prisma/client'

export class InMemoryUsersRepository {
  public users: Prisma.UserCreateInput[] = []

  async create(data: Prisma.UserCreateInput) {
    this.users.push(data)
  }
}
