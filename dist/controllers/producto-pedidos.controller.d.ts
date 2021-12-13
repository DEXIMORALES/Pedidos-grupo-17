import { Count, Filter, Where } from '@loopback/repository';
import { Producto, Pedidos } from '../models';
import { ProductoRepository } from '../repositories';
export declare class ProductoPedidosController {
    protected productoRepository: ProductoRepository;
    constructor(productoRepository: ProductoRepository);
    get(id: string, filter?: Filter<Pedidos>): Promise<Pedidos>;
    create(id: typeof Producto.prototype.id, pedidos: Omit<Pedidos, 'id'>): Promise<Pedidos>;
    patch(id: string, pedidos: Partial<Pedidos>, where?: Where<Pedidos>): Promise<Count>;
    delete(id: string, where?: Where<Pedidos>): Promise<Count>;
}
