import type{ Course } from './models';
import { BaseRepository } from './baseRepositoryClass';

export class CourseRepository extends BaseRepository<Course> {
  constructor() {
    super([
      { id: 'c1', title: 'Math 101', description: 'Basic math course' },
      { id: 'c2', title: 'History 201', description: 'World history overview' },
    ]);
  }
}