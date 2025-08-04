"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    constructor(initialData) {
        this.data = initialData;
    }
    async getAll() {
        return this.data;
    }
    async getById(id) {
        return this.data.find(item => item.id === id);
    }
    async create(item) {
        this.data.push(item);
    }
    async update(item) {
        const index = this.data.findIndex(i => i.id === item.id);
        if (index !== -1)
            this.data[index] = item;
    }
    async delete(id) {
        this.data = this.data.filter(item => item.id !== id);
    }
    async find(filter) {
        return this.data.filter(item => {
            return Object.entries(filter).every(([key, value]) => item[key] === value);
        });
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=baseRepositoryClass.js.map