import { Component } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

import {AlunoModelService } from './AlunoModelService';
import { AlunoModel } from './Aluno.model';

@Component({
  selector: 'app-aluno-novo',
  templateUrl: './aluno-novo.component.html',
  styleUrls: ['./aluno-novo.component.css']
})
export class AlunoNovoComponent implements OnInit {
  aluno: AlunoModel = new AlunoModel();
  alunoDataSource: MatTableDataSource<AlunoModel> = new MatTableDataSource();

  displayedAlunos: String[] = ['idaluno', 'nome', 'update', 'delete'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  AlunoModelService: any;
  cursoDataSource: any;
.AlunoModelService: any;

  constructor(private alunoService: AlunoModelService, private router: Router) { }

  ngOnInit(): void {
    this.getAlunosList();
  }
  getAlunosList() {
    throw new Error('Method not implemented.');
  }

  getAlunoList() {

   
    this.AlunoModelService.getAlunoList().subscribe(
        dados => {
          this.alunoDataSource = new MatTableDataSource<AlunoModel>(dados as AlunoModel[]);
          this.alunoDataSource.paginator = this.paginator;
          this.alunoDataSource.sort = this.sort;
        },
      (        error: any) => console.log(error)
      );
  }


  deletarAluno(delaluno : AlunoModel){
    this.AlunoModelService.deleteCurso(delaluno.idaluno).subscribe(
      (      dados: any) => {
        this.AlunoModelService.openSnackBar('Aluno excluído !');
        this.getAlunoList();
      }
    )
  }
  
  navigateToAlunoNovo() {
    this.router.navigate(['/aluno-novo']);
  }

  navigateToAlunoEditar(AlunoModel: AlunoModel) {
    this.router.navigate([`/aluno-editar/${this.aluno.idaluno}`]);
  }
}
