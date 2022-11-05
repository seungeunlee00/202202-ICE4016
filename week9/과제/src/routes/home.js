import express from 'express';
import {insertSql} from '../database/sql';

const router = express.Router();

router.get('/', (_req, res) => {
    res.render('home');
})

router.post('/', (req, res) => {
    const vars = req.body;

    const data = {
        Name: vars.name,
        Email: vars.email,
        Phone: vars.phone,
        Major: vars.major,
        Std_Id: vars.std_id
    };
    insertSql.setStudent(data);
    
    res.redirect('/');
})

module.exports = router;