import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunoModel } from '../alunos/aluno-model';
import { AlunoModelService } from './aluno-model.service';

@Component({
  selector: 'app-alunos-editar',
  templateUrl: './aluno-editar.component.html',
  styleUrls: ['./aluno-editar.component.css']
})
export class AlunoEditarComponent implements OnInit {

  aluno: AlunoModel = new AlunoModel();

  constructor(private alunomodelrvice: AlunoModelService,
              private router: Router,
              private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAluno(this.rotaAtiva.snapshot.paramMap.get('id'));
  }

  getCurso(id: any) {
        this.alunomodelrvice.getAluno(id).subscribe(
            dado =>   { 
                          this.aluno = dado;
                          console.log(dado);
                      },
            error =>  {
                          console.log(error);
                      }
        )
  }

  atualizar() {
    this.alunomodelrvice.updateCurso(this.aluno.idaluno, this.aluno).subscribe(
        dado => {
                  this.alunomodelrvice.openSnackBar('Aluno atualizado !');
                  this.router.navigate(['/alunos']);
                  console.log(dado);
                },
        error => {
                  console.log(error);
                })
  }

  cancelar() {
      this.router.navigate(['/alunos']);
  }
}

