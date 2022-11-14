import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

router.get('/', async (_req, res) => {
    const data = {
        id: _req.query.id,
    }
    const student = await selectSql.getStudentWhere(data);
    const lecture = await selectSql.getClass();
    const StudentHasClass = await selectSql.getStudentHasClassWhere(data);

    res.render('delete', {
        title1: '학생 정보',
        title2: '강의 정보',
        title3: '수강 과목 삭제',
        student,
        lecture,
        StudentHasClass
    })
})

// 삭제 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/', async(req, res) => {
    console.log('delete router:', req.body.delBtn);

    const data = {
        id: req.body.delBtn,
        std_id: req.body.Std_Id
    };

    await deleteSql.deleteStudentHasClass(data);

    res.redirect('/delete?id=' + data.std_id);
});

module.exports = router;