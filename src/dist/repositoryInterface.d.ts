export interface IRepository<T extends {
    id: string;
}> {
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T | undefined>;
    create(item: T): Promise<void>;
    update(item: T): Promise<void>;
    delete(id: string): Promise<void>;
    find(filter: Partial<T>): Promise<T[]>;
}
//# sourceMappingURL=repositoryInterface.d.ts.map