import { Repository } from 'typeorm';
import { User } from '../models/user.model';

export class UserRepository extends Repository<User> {}