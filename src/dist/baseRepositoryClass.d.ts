import type { IRepository } from './repositoryInterface';
export declare class BaseRepository<T extends {
    id: string;
}> implements IRepository<T> {
    protected data: T[];
    constructor(initialData: T[]);
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T | undefined>;
    create(item: T): Promise<void>;
    update(item: T): Promise<void>;
    delete(id: string): Promise<void>;
    find(filter: Partial<T>): Promise<T[]>;
}
//# sourceMappingURL=baseRepositoryClass.d.ts.map