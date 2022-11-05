import mysql from 'mysql2';

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'inha',
        password: 'tmddms30',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

export const selectSql = {
    getBuilding: async () => {
        const sql = `select * from building`;
        const [result] = await promisePool.query(sql);

        return result;
    },
    getClass: async () => {
        const sql = `select * from class`;
        const [result] = await promisePool.query(sql);

        return result;
    },
    getClub: async () => {
        const sql = `select * from club`;
        const [result] = await promisePool.query(sql);

        return result;
    },
    getDepartment: async () => {
        const sql = `select * from department`;
        const [result] = await promisePool.query(sql);

        return result
    },
    getEmployee: async () => {
        const sql = `select * from employee`;
        const [result] = await promisePool.query(sql);

        return result;
    },
    getRoom: async () => {
        const sql = `select * from room`;
        const [result] = await promisePool.query(sql);

        return result;
    },
    getStudent: async () => {
        const sql = `select * from student`;
        const [result] = await promisePool.query(sql);

        return result;
    },
    getStudentHasClass: async () => {
        const sql = `select * from student_has_class`;
        const [result] = await promisePool.query(sql);

        return result;
    },
}

export const insertSql = {
    setStudent: async (data) => {
        const sql = `insert into student(name, email, phone, major, std_id) values (
            "${data.Name}", "${data.Email}", 
            "${data.Phone}", "${data.Major}", "${data.Std_Id}"
        )`

        await promisePool.query(sql);
    },
};

export const updateSql = {
    updateStudent: async (data) => {
        console.log(data);

        const sql1 = `update student set name = "${data.Name}" where id = "${data.Id}"`;
        await promisePool.query(sql1);

        const sql2 = `update student set email = "${data.Email}" where id = "${data.Id}"`;
        await promisePool.query(sql2);

        const sql3 = `update student set phone = "${data.Phone}" where id = "${data.Id}"`;
        await promisePool.query(sql3);

        const sql4 = `update student set major = "${data.Major}" where id = "${data.Id}"`;
        await promisePool.query(sql4);

        const sql5 = `update student set Std_Id = "${data.Std_Id}" where id = "${data.Id}"`;
        await promisePool.query(sql5);
    },
}