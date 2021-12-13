"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidosPersonaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PedidosPersonaController = class PedidosPersonaController {
    constructor(pedidosRepository) {
        this.pedidosRepository = pedidosRepository;
    }
    async getPersona(id) {
        return this.pedidosRepository.persona(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pedidos/{id}/persona', {
        responses: {
            '200': {
                description: 'Persona belonging to Pedidos',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Persona) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidosPersonaController.prototype, "getPersona", null);
PedidosPersonaController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PedidosRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PedidosRepository])
], PedidosPersonaController);
exports.PedidosPersonaController = PedidosPersonaController;
//# sourceMappingURL=pedidos-persona.controller.js.map