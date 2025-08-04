"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const baseRepositoryClass_1 = require("./baseRepositoryClass");
class UserRepository extends baseRepositoryClass_1.BaseRepository {
    constructor() {
        super([
            { id: 'u1', name: 'Alice', email: 'alice@example.com' },
            { id: 'u2', name: 'Bob', email: 'bob@example.com' },
        ]);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=userData.js.map