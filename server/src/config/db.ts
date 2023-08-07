import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const mysqlConfig = {
  host: process.env.DB_HOST as string,
  port: Number(process.env.DB_PORT as string),
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
  connectionLimit: 10,
};

export const db = mysql.createPool(mysqlConfig);
