"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_typescript_1 = require("sequelize-typescript");
exports.sequelize = new sequelize_typescript_1.Sequelize({
    logging: false,
    dialect: 'postgres',
    database: 'cookie-cat',
    models: [__dirname + '/models'],
});
