import { Pedidos, Persona } from '../models';
import { PedidosRepository } from '../repositories';
export declare class PedidosPersonaController {
    pedidosRepository: PedidosRepository;
    constructor(pedidosRepository: PedidosRepository);
    getPersona(id: typeof Pedidos.prototype.id): Promise<Persona>;
}
