import { Entity } from '@loopback/repository';
export declare class Pedidos extends Entity {
    id?: string;
    Id_producto: String;
    Cantidad: number;
    Total: number;
    Estado: string;
    personaId: string;
    productoId?: string;
    constructor(data?: Partial<Pedidos>);
}
export interface PedidosRelations {
}
export declare type PedidosWithRelations = Pedidos & PedidosRelations;
