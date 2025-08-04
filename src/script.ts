import { UserRepository } from './userData';
import { CourseRepository } from './courseData';
import { BookingRepository } from './bookingData';

(async () => {
  const userRepo = new UserRepository();
  const courseRepo = new CourseRepository();
  const bookingRepo = new BookingRepository();

  console.log('All Users:', await userRepo.getAll());
  console.log('Get User by ID:', await userRepo.getById('u1'));
  await userRepo.create({ id: 'u3', name: 'Charlie', email: 'charlie@example.com' });
  console.log('Users after create:', await userRepo.getAll());
  await userRepo.update({ id: 'u3', name: 'Charles', email: 'charles@example.com' });
  console.log('Users after update:', await userRepo.getAll());
  await userRepo.delete('u3');
  console.log('Users after delete:', await userRepo.getAll());
  console.log('Find user by name:', await userRepo.find({ name: 'Alice' }));

  console.log('\nAll Courses:', await courseRepo.getAll());
  console.log('\nAll Bookings:', await bookingRepo.getAll());
})();