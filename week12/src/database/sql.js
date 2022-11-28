import mysql from "mysql2";

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
  getStudent: async () => {
    const [result] = await promisePool.query(`select * from student`);

    return result;
  },
  getStudentWhere: async (data) => {
    const sql = `select * from student where std_id=${data}`;
    const [result] = await promisePool.query(sql);

    return result;
  },
  getStudentHasClassWhere: async (data) => {
    const sql = `select Class_Id from student_has_class where std_id=${data}`;
    const [result] = await promisePool.query(sql);

    return result;
  },
  getClass: async () => {
    const [result] = await promisePool.query(`select * from class`);

    return result;
  },
  getClassWhere: async (data) => {
    const sql = `select * from class where id=${data}`;
    const [result] = await promisePool.query(sql);

    return result;
  },
}

// insert query
export const InsertSql = {
  InsertStudentHasClass: async (data) => {
    const sql = `Insert into student_has_class(Std_Id, Class_Id) Values(${data.std}, ${data.class})`;
    const [result] = await promisePool.query(sql);

    return result;
  },
}

// update query
export const UpdateSql = {
  UpdateClass: async (data) => {
    const sql = `update class set participants=participants-1 where id=${data.class}`;
    const [result] = await promisePool.query(sql);

    return result;
  },
}