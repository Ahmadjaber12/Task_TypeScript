var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserRepository } from './userData';
import { CourseRepository } from './courseData';
import { BookingRepository } from './bookingData';
(() => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = new UserRepository();
    const courseRepo = new CourseRepository();
    const bookingRepo = new BookingRepository();
    console.log('All Users:', yield userRepo.getAll());
    console.log('Get User by ID:', yield userRepo.getById('u1'));
    yield userRepo.create({ id: 'u3', name: 'Charlie', email: 'charlie@example.com' });
    console.log('Users after create:', yield userRepo.getAll());
    yield userRepo.update({ id: 'u3', name: 'Charles', email: 'charles@example.com' });
    console.log('Users after update:', yield userRepo.getAll());
    yield userRepo.delete('u3');
    console.log('Users after delete:', yield userRepo.getAll());
    console.log('Find user by name:', yield userRepo.find({ name: 'Alice' }));
    console.log('\nAll Courses:', yield courseRepo.getAll());
    console.log('\nAll Bookings:', yield bookingRepo.getAll());
}))();
//# sourceMappingURL=script.js.map