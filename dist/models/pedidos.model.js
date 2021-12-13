"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedidos = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const persona_model_1 = require("./persona.model");
let Pedidos = class Pedidos extends repository_1.Entity {
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
], Pedidos.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Pedidos.prototype, "Id_producto", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Pedidos.prototype, "Cantidad", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Pedidos.prototype, "Total", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Pedidos.prototype, "Estado", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => persona_model_1.Persona),
    (0, tslib_1.__metadata)("design:type", String)
], Pedidos.prototype, "personaId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Pedidos.prototype, "productoId", void 0);
Pedidos = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Pedidos);
exports.Pedidos = Pedidos;
//# sourceMappingURL=pedidos.model.js.map