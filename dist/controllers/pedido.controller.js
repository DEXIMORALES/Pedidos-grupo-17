"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PedidoController = class PedidoController {
    constructor(pedidosRepository) {
        this.pedidosRepository = pedidosRepository;
    }
    async create(pedidos) {
        return this.pedidosRepository.create(pedidos);
    }
    async count(where) {
        return this.pedidosRepository.count(where);
    }
    async find(filter) {
        return this.pedidosRepository.find(filter);
    }
    async updateAll(pedidos, where) {
        return this.pedidosRepository.updateAll(pedidos, where);
    }
    async findById(id, filter) {
        return this.pedidosRepository.findById(id, filter);
    }
    async updateById(id, pedidos) {
        await this.pedidosRepository.updateById(id, pedidos);
    }
    async replaceById(id, pedidos) {
        await this.pedidosRepository.replaceById(id, pedidos);
    }
    async deleteById(id) {
        await this.pedidosRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/pedidos'),
    (0, rest_1.response)(200, {
        description: 'Pedidos model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Pedidos) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedidos, {
                    title: 'NewPedidos',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pedidos/count'),
    (0, rest_1.response)(200, {
        description: 'Pedidos model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Pedidos)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pedidos'),
    (0, rest_1.response)(200, {
        description: 'Array of Pedidos model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Pedidos, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Pedidos)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pedidos'),
    (0, rest_1.response)(200, {
        description: 'Pedidos PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedidos, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Pedidos)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Pedidos, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pedidos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Pedidos model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedidos, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Pedidos, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pedidos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pedidos PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedidos, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Pedidos]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/pedidos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pedidos PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Pedidos]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/pedidos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Pedidos DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoController.prototype, "deleteById", null);
PedidoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PedidosRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PedidosRepository])
], PedidoController);
exports.PedidoController = PedidoController;
//# sourceMappingURL=pedido.controller.js.map