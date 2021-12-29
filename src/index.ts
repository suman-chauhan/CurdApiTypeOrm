import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as BodyParser from "body-parser";
import * as cors from "cors";
import postRoutes from "./routes/userRoutes";
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
import router from "./routes/userRoutes";

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Backend dev API",
			version: "1.0.0",
			description: "A simple Backend Dev API",
		},
		servers: [
			{
				url: "http://localhost:8080",
			},
		],
	},
	apis: ["./routes/*.ts"],
  explorer:true
};

const specs = swaggerJsDoc(options);





createConnection()
  .then(async (connection) => {
    const app = express();
    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
    app.use(cors());
    app.use(BodyParser.json());

    app.use("/", postRoutes);

    app.listen(8080, () => console.log("App is running at port 8080."));
  })
  .catch((error) => console.log(error));