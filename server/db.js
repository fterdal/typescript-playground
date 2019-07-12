"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.db = new sequelize_1.Sequelize('postgres://localhost:5432/cookie-cat', {
    logging: false,
});
exports.seedCats = [
    {
        name: 'Rigatoni',
    },
    {
        name: 'Tom',
    },
];
