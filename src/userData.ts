import type{ User } from './models';
import { BaseRepository } from './baseRepositoryClass';

export class UserRepository extends BaseRepository<User> {
  constructor() {
    super([
      { id: 'u1', name: 'Alice', email: 'alice@example.com' },
      { id: 'u2', name: 'Bob', email: 'bob@example.com' },
    ]);
  }
}