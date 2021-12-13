"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductoController = class ProductoController {
    constructor(productoRepository) {
        this.productoRepository = productoRepository;
    }
    async create(producto) {
        return this.productoRepository.create(producto);
    }
    async count(where) {
        return this.productoRepository.count(where);
    }
    async find(filter) {
        return this.productoRepository.find(filter);
    }
    async updateAll(producto, where) {
        return this.productoRepository.updateAll(producto, where);
    }
    async findById(id, filter) {
        return this.productoRepository.findById(id, filter);
    }
    async updateById(id, producto) {
        await this.productoRepository.updateById(id, producto);
    }
    async replaceById(id, producto) {
        await this.productoRepository.replaceById(id, producto);
    }
    async deleteById(id) {
        await this.productoRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('admin'),
    (0, rest_1.post)('/productos'),
    (0, rest_1.response)(200, {
        description: 'Producto model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Producto) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producto, {
                    title: 'NewProducto',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/productos/count'),
    (0, rest_1.response)(200, {
        description: 'Producto model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Producto)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/productos'),
    (0, rest_1.response)(200, {
        description: 'Array of Producto model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Producto, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Producto)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/productos'),
    (0, rest_1.response)(200, {
        description: 'Producto PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producto, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Producto)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Producto, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/productos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Producto model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producto, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Producto, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/productos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Producto PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producto, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Producto]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/productos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Producto PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Producto]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/productos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Producto DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoController.prototype, "deleteById", null);
ProductoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ProductoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ProductoRepository])
], ProductoController);
exports.ProductoController = ProductoController;
//# sourceMappingURL=producto.controller.js.map