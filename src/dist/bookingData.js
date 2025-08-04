"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRepository = void 0;
const baseRepositoryClass_1 = require("./baseRepositoryClass");
class BookingRepository extends baseRepositoryClass_1.BaseRepository {
    constructor() {
        super([
            { id: 'b1', userId: 'u1', courseId: 'c1', date: '2025-08-01' },
            { id: 'b2', userId: 'u2', courseId: 'c2', date: '2025-08-02' },
        ]);
    }
}
exports.BookingRepository = BookingRepository;
//# sourceMappingURL=bookingData.js.map