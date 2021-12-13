"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let PersonaRepository = class PersonaRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, pedidosRepositoryGetter) {
        super(models_1.Persona, dataSource);
        this.pedidosRepositoryGetter = pedidosRepositoryGetter;
        this.pedidos = this.createHasManyRepositoryFactoryFor('pedidos', pedidosRepositoryGetter);
        this.registerInclusionResolver('pedidos', this.pedidos.inclusionResolver);
    }
};
PersonaRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.mongodb')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('PedidosRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.MongodbDataSource, Function])
], PersonaRepository);
exports.PersonaRepository = PersonaRepository;
//# sourceMappingURL=persona.repository.js.map