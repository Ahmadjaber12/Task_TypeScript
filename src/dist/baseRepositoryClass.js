var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class BaseRepository {
    constructor(initialData) {
        this.data = initialData;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.data;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.data.find(item => item.id === id);
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data.push(item);
        });
    }
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.data.findIndex(i => i.id === item.id);
            if (index !== -1)
                this.data[index] = item;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.data = this.data.filter(item => item.id !== id);
        });
    }
    find(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.data.filter(item => {
                return Object.entries(filter).every(([key, value]) => item[key] === value);
            });
        });
    }
}
//# sourceMappingURL=baseRepositoryClass.js.map