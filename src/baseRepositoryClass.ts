import type{ IRepository } from './repositoryInterface';

export class BaseRepository<T extends { id: string }> implements IRepository<T> {
  protected data: T[];

  constructor(initialData: T[]) {
    this.data = initialData;
  }

  async getAll(): Promise<T[]> {
    return this.data;
  }

  async getById(id: string): Promise<T | undefined> {
    return this.data.find(item => item.id === id);
  }

  async create(item: T): Promise<void> {
    this.data.push(item);
  }

  async update(item: T): Promise<void> {
    const index = this.data.findIndex(i => i.id === item.id);
    if (index !== -1) this.data[index] = item;
  }

  async delete(id: string): Promise<void> {
    this.data = this.data.filter(item => item.id !== id);
  }

  async find(filter: Partial<T>): Promise<T[]> {
    return this.data.filter(item => {
      return Object.entries(filter).every(([key, value]) => (item as any)[key] === value);
    });
  }
}