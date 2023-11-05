import dotenv from "dotenv";

dotenv.config();

const [port, host, dbHost, user, password, database] = [
  process.env.PORT,
  process.env.HOST,
  process.env.DB_HOST,
  process.env.DB_USER,
  process.env.DB_PASS,
  process.env.DB_SCHEMA,
];

const server = { port, host };

const mysql = { host: dbHost, user, password, database };

export default { server, mysql };
