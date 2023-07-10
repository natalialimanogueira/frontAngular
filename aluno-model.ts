import { Curso } from "../cursos/curso.model";

export class AlunoModel {
    idaluno !: number;
    nome !: string;
    sexo !: string;
    dt_nasc !: Date;
    curso !: Curso;
}
