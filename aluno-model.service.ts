import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { AlunoModel } from "./aluno-model";

@Injectable({
  providedIn: 'root'
})
export class AlunoModelService {

  baseUrl = 'http://localhost:8080/academico/alunos';

  constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 2000,
      verticalPosition: "top",
      horizontalPosition: "right"
    });
  }

  getAlunosList(): Observable<AlunoModel[]> {
    return this.httpClient.get<AlunoModel[]>(`${this.baseUrl}`);
  }

  getAluno(id: number): Observable<AlunoModel> {
    return this.httpClient.get<AlunoModel>(`${this.baseUrl}/${id}`);
  }

  createAluno(aluno: AlunoModel): Observable<AlunoModel> {
    return this.httpClient.post<AlunoModel>(`${this.baseUrl}`, AlunoModel);
  }

  updateAluno(id: number, AlunoModel: AlunoModel): Observable<AlunoModel> {
    return this.httpClient.put<AlunoModel>(`${this.baseUrl}/${id}`, AlunoModel);
  }

  deleteAluno(id: number): Observable<AlunoModel> {
    return this.httpClient.delete<AlunoModel>(`${this.baseUrl}/${id}`);
  }
}

