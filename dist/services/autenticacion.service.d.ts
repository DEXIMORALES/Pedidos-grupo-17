import { Persona } from '../models';
import { PersonaRepository } from '../repositories';
export declare class AutenticacionService {
    personaRepository: PersonaRepository;
    constructor(personaRepository: PersonaRepository);
    GenerarClave(): any;
    CifrarClave(clave: string): any;
    IdentificarPersona(usuario: string, clave: string): false | Promise<(Persona & import("../models").PersonaRelations) | null>;
    GenerarTokenJWT(persona: Persona): any;
    ValidarTokenJWT(token: string): any;
}
