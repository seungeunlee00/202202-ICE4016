// Copyright 2021 kms
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import express from "express";
// TODO
// sql import
import { selectSql, InsertSql, UpdateSql } from "../database/sql";

const router = express.Router();

router.get('/', async function (req, res) {
    // TODO
    // req.cookies.user = 로그인한 학생의 학번
    const student = await selectSql.getStudentWhere(req.cookies.user);
    const studentHasClass = await selectSql.getStudentHasClassWhere(req.cookies.user);
    const lecture = await selectSql.getClass();

    const myLecture = []; // 수강하는 수업의 Id 저장
    const lectureWhere =[]; // 수강하는 Class 테이블 저장 
    let count = 0; let i = 0; // 수강하는 수업 개수 count

    /* Student_has_class table에서 해당 학생이 수강하는 수업의 Id만 추출 */
    // console.log(studentHasClass); -> [ { Class_Id: '2' }, { Class_Id: '3' } ]
    studentHasClass.map((std) => {
        myLecture.push(std.Class_Id);
        count++;
    })
    // console.log(myLecture); -> [ '2', '3' ]

    for (i=0; i<count; i++){
        let temp = await selectSql.getClassWhere(myLecture[i]);
        // console.log(...temp);
        lectureWhere.push(...temp); // Spread Operator
    }


    if (req.cookies.user) {
        // TODO
        res.render('select', {
            title1: '강의 조회',
            student,
            lectureWhere,
            lecture,
            });
    } else {
        res.render('/')
    }
});

// 수강신청 버튼을 눌렀을 경우 insert, update query를 실행
router.post('/', async(req, res) => {
    console.log('insert router:', req.body.InsertBtn);

    const data = {
        std: req.cookies.user,
        class: req.body.InsertBtn,
    };

    await InsertSql.InsertStudentHasClass(data);
    await UpdateSql.UpdateClass(data);

    res.redirect('/sugang');
});

module.exports = router;