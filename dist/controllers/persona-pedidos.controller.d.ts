import { Count, Filter, Where } from '@loopback/repository';
import { Persona, Pedidos } from '../models';
import { PersonaRepository } from '../repositories';
export declare class PersonaPedidosController {
    protected personaRepository: PersonaRepository;
    constructor(personaRepository: PersonaRepository);
    find(id: string, filter?: Filter<Pedidos>): Promise<Pedidos[]>;
    create(id: typeof Persona.prototype.id, pedidos: Omit<Pedidos, 'id'>): Promise<Pedidos>;
    patch(id: string, pedidos: Partial<Pedidos>, where?: Where<Pedidos>): Promise<Count>;
    delete(id: string, where?: Where<Pedidos>): Promise<Count>;
}
