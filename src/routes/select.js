import express from 'express';
import {selectSql} from '../database/sql';

const router = express.Router();

router.get('/', async (_req, res) => {
    const building = await selectSql.getBuilding();
    const lecture = await selectSql.getClass();
    const club = await selectSql.getClub();
    const department = await selectSql.getDepartment();
    const employee = await selectSql.getEmployee();
    const room = await selectSql.getRoom();
    const student = await selectSql.getStudent();
    const student_has_class = await selectSql.getStudentHasClass();

    res.render('select', {
        title: '빌딩 테이블',
        title2: '강의 테이블',
        title3: '동아리 테이블',
        title4: '부서 테이블',
        title5: '직원 테이블',
        title6: '강의실 테이블',
        title7: '학생 테이블',
        title8: 'student_has_class 테이블',
        building,
        lecture,
        club,
        department,
        employee,
        room,
        student,
        student_has_class
    })
})

module.exports = router;