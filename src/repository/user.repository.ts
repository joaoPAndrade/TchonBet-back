import { Repository, EntityRepository } from 'typeorm';
import { User } from '../models/user.model';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { email } });
    return user ?? undefined;
  }

  async findByCpf(cpf: string): Promise<User | undefined> {
    const user = await this.findOne({ where: { cpf } });
    return user ?? undefined;
  }
}