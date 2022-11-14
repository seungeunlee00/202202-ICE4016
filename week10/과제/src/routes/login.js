import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/', (req,res) => {
    res.render('login');
})

router.post('/', async (req,res) => {
    const vars = req.body;
    const users = await selectSql.getUser();
    let whoAmI = '';
    let checkLogin = false;

    users.map((user) => {
        if(vars.id === user.Id && vars.password === user.pwd) {
            console.log('login success!');
            checkLogin = true;
            if (vars.id === 'user'){
                whoAmI = 'user';
            } else {
                whoAmI = 'student';
            }
        }
    })

    if(checkLogin && whoAmI === 'student'){
        res.redirect('/delete?id='+ vars.id);
    } else if(checkLogin && whoAmI === 'user'){
        res.redirect('/select');
    } else {
        console.log('login failed!');
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>")
    }

})

module.exports = router;