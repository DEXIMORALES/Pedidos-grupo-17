"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const pedidos_model_1 = require("./pedidos.model");
let Producto = class Producto extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Producto.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Producto.prototype, "Nombre", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Producto.prototype, "Precio", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Producto.prototype, "Imagen", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => pedidos_model_1.Pedidos),
    (0, tslib_1.__metadata)("design:type", pedidos_model_1.Pedidos)
], Producto.prototype, "pedidos", void 0);
Producto = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Producto);
exports.Producto = Producto;
//# sourceMappingURL=producto.model.js.map