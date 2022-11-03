import mysql from 'mysql2';

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
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
    getUsers: async () => {
        const [rows] = await promisePool.query(`select * from user`);

        return rows;
    },

    getDepartment: async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows;
    }
}

// delete query
export const deleteSql = {
    deleteDepartment: async(data) => {
        console.log("deleteSql.deleteDepartment:", data.Dnumber);
        const sql = `delete from department where Dnumber=${data.Dnumber}`

        await promisePool.query(sql);
    }
}