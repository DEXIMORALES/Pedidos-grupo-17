import { Entity } from '@loopback/repository';
import { Pedidos } from './pedidos.model';
export declare class Persona extends Entity {
    id?: string;
    Nombre: string;
    Apellidos: string;
    correo: string;
    celular: string;
    Clave: string;
    pedidos: Pedidos[];
    constructor(data?: Partial<Persona>);
}
export interface PersonaRelations {
}
export declare type PersonaWithRelations = Persona & PersonaRelations;
