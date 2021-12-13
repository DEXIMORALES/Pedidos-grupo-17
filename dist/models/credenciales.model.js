"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credenciales = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Credenciales = class Credenciales extends repository_1.Model {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Credenciales.prototype, "usuario", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Credenciales.prototype, "clave", void 0);
Credenciales = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Credenciales);
exports.Credenciales = Credenciales;
//# sourceMappingURL=credenciales.model.js.map