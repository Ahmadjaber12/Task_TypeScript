"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRepository = void 0;
const baseRepositoryClass_1 = require("./baseRepositoryClass");
class CourseRepository extends baseRepositoryClass_1.BaseRepository {
    constructor() {
        super([
            { id: 'c1', title: 'Math 101', description: 'Basic math course' },
            { id: 'c2', title: 'History 201', description: 'World history overview' },
        ]);
    }
}
exports.CourseRepository = CourseRepository;
//# sourceMappingURL=courseData.js.map