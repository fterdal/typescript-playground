"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('postgres://localhost:5432/cookie-cat', {
    logging: false,
});
// export const Cat = sequelize.define('cat', {
//   name: DataTypes.STRING,
// })
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(sequelize_1.Model));
exports.Cat = Cat;
Cat.init({
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
}, {
    sequelize: exports.sequelize,
    tableName: 'cats'
});
exports.seedCats = [
    {
        name: 'Rigatoni',
    },
    {
        name: 'Tom',
    },
];
