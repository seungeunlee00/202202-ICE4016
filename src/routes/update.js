import express from 'express';
import {selectSql, updateSql} from '../database/sql';

const router = express.Router();

router.get('/', async (_req, res) => {
    const emp_res = await selectSql.getStudent();
    res.render('update', {
        title: '학생 테이블 갱신',
        emp_res,
    });
});

router.post('/', async (req, res) => {
    const vars = req.body;
    const data = {
        Id: vars.id,
        Name: vars.name,
        Email: vars.email,
        Phone: vars.phone,
        Major: vars.major,
        Std_Id: vars.std_id,
    }
    await updateSql.updateStudent(data);

    res.redirect('/select');
});


module.exports = router;