import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Pedidos, PedidosRelations, Persona } from '../models';
import { PersonaRepository } from './persona.repository';
export declare class PedidosRepository extends DefaultCrudRepository<Pedidos, typeof Pedidos.prototype.id, PedidosRelations> {
    protected personaRepositoryGetter: Getter<PersonaRepository>;
    readonly persona: BelongsToAccessor<Persona, typeof Pedidos.prototype.id>;
    constructor(dataSource: MongodbDataSource, personaRepositoryGetter: Getter<PersonaRepository>);
}
