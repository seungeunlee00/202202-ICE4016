import mysql from 'mysql2';

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week9',
        password: 'tmddms30',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

const promisePool = pool.promise();

export const selectSql = {
    getEmployee: async () => {
        const sql = `select * from employee`;
        const [result] = await promisePool.query(sql);

        return result;
    },

    getDepartment: async () => {
        const sql = `select * from department`;
        const [result] = await promisePool.query(sql);

        return result
    }
}

export const insertSql = {
    setEmployee: async (data) => {
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}"
        )`

        await promisePool.query(sql);
    },

    setDepartment: async (data) => {
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}"
        )`

        await promisePool.query(sql);
    }
};

export const updateSql = {
    updateEmployee: async () => {
        const sql = `update employee set salary = 500 where Minit = "F"`;
        await promisePool.query(sql);
    },

    updateDepartment: async (data) => {
        console.log(data);
        const sql = `update department set dname = "${data.Dname}" where Dnumber=5`;
        console.log(sql);
        await promisePool.query(sql);
    }
}