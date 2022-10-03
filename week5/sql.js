import mysql from 'mysql2';

const pool = mysql.createPool({
    host:'localhost',
    port: 3306,
    user:'root',
    password: 'tmddms30',
    database: 'inha',
})

const promisePool = pool.promise();

const sql = {
    getClub: async()=>{
        const results = await promisePool.query(`
        select * from club;
        `)

        return results;
    },
};

export default sql;