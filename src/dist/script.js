"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userData_1 = require("./userData");
const courseData_1 = require("./courseData");
const bookingData_1 = require("./bookingData");
(async () => {
    const userRepo = new userData_1.UserRepository();
    const courseRepo = new courseData_1.CourseRepository();
    const bookingRepo = new bookingData_1.BookingRepository();
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
//# sourceMappingURL=script.js.map