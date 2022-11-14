import express from 'express';
import {selectSql} from '../database/sql';

const router = express.Router();

router.get('/', async (_req, res) => {
    const lecture = await selectSql.getClass();
    
    res.render('select', {
        title: '강의 정보',
        lecture,
    })
})

module.exports = router;