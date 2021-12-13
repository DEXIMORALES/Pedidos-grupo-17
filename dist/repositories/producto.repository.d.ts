import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasOneRepositoryFactory } from '@loopback/repository';
import { MongodbDataSource } from '../datasources';
import { Producto, ProductoRelations, Pedidos } from '../models';
import { PedidosRepository } from './pedidos.repository';
export declare class ProductoRepository extends DefaultCrudRepository<Producto, typeof Producto.prototype.id, ProductoRelations> {
    protected pedidosRepositoryGetter: Getter<PedidosRepository>;
    readonly pedidos: HasOneRepositoryFactory<Pedidos, typeof Producto.prototype.id>;
    constructor(dataSource: MongodbDataSource, pedidosRepositoryGetter: Getter<PedidosRepository>);
}
