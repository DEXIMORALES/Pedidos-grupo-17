"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estrategiaasesor = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const parse_bearer_token_1 = (0, tslib_1.__importDefault)(require("parse-bearer-token"));
const services_1 = require("../services");
let Estrategiaasesor = class Estrategiaasesor {
    constructor(servicioAutenticacion) {
        this.servicioAutenticacion = servicioAutenticacion;
        this.name = 'ases';
    }
    async authenticate(request) {
        let token = (0, parse_bearer_token_1.default)(request);
        if (token) {
            let datos = this.servicioAutenticacion.ValidarTokenJWT(token);
            if (datos) {
                let perfil = Object.assign({
                    nombre: datos.data.Nombre
                });
                return perfil;
            }
            else {
                throw new rest_1.HttpErrors[401]('El token suministrado no es valido');
            }
        }
        else {
            throw new rest_1.HttpErrors[401]('No hay un token en la solicitud');
        }
    }
};
Estrategiaasesor = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.service)(services_1.AutenticacionService)),
    (0, tslib_1.__metadata)("design:paramtypes", [services_1.AutenticacionService])
], Estrategiaasesor);
exports.Estrategiaasesor = Estrategiaasesor;
//# sourceMappingURL=asesor.strategy.js.map