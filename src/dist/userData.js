import { BaseRepository } from './baseRepositoryClass';
export class UserRepository extends BaseRepository {
    constructor() {
        super([
            { id: 'u1', name: 'Alice', email: 'alice@example.com' },
            { id: 'u2', name: 'Bob', email: 'bob@example.com' },
        ]);
    }
}
//# sourceMappingURL=userData.js.map