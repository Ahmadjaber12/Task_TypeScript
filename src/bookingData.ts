import type{ Booking } from './models';
import { BaseRepository } from './baseRepositoryClass';

export class BookingRepository extends BaseRepository<Booking> {
  constructor() {
    super([
      { id: 'b1', userId: 'u1', courseId: 'c1', date: '2025-08-01' },
      { id: 'b2', userId: 'u2', courseId: 'c2', date: '2025-08-02' },
    ]);
  }
}