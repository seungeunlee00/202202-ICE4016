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

// async / await 사용
const promisePool = pool.promise();

// select query
export const selectSql = {
    getUser: async () => {
        const sql = `select * from user`;
        const [result] = await promisePool.query(sql);

        return result;
    },
    getClass: async () => {
        const sql = `select * from class`;
        const [result] = await promisePool.query(sql);

        return result;
    },
    getStudentWhere: async (data) => {
        const sql = `select * from student where std_id=${data.id}`;
        const [result] = await promisePool.query(sql);

        return result;
    },
    getStudentHasClassWhere: async (data) => {
        const sql = `select * from student_has_class where std_id=${data.id}`;
        const [result] = await promisePool.query(sql);

        return result;
    },
}

// delete query
export const deleteSql = {
    deleteStudentHasClass: async(data) => {
        console.log("deleteSql.deleteStudentHasClass: ", data.id);
        const sql = `delete from student_has_class where id=${data.id}`

        await promisePool.query(sql);
    }
}