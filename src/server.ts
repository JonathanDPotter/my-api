import express from "express";
import path from "path";
import indexRoutes from "./routes/index.routes";
import config from "./config";
import errorHandler from "./middleware/errorHanlder";
import logger from "./middleware/logger";

const server = express();

const { host, port } = config.server;

server.use(express.json());
server.use(express.static(path.join(__dirname, "./static")));
server.use(logger);
server.use(indexRoutes);
server.use(errorHandler);

server.listen(port, () => console.log(`Server listening on ${host}:${port}`));
