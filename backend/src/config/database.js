import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_NAME,
  pass: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATBASES_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

export default db.promise();
