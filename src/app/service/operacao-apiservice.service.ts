import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { throwError, Observable } from 'rxjs';
import { Avaliacao } from '../model/Avaliacao';
import {retry, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class OperacaoAPIServiceService {

  apiUrl: string = "http://172.16.58.22:8001/api/funcoes/multiplicacao/";
  
  constructor(private httpClient: HttpClient) { }

  handleError(error) {
    let errorMessage = `Código de erro: ${error.status}\nMensagem: ${error.message}`;

    alert(errorMessage);

    return throwError(errorMessage);
  }

  createAvaliacao(aval: Avaliacao): Observable<string> {
    return this.httpClient.post<string>(this.apiUrl, aval).pipe(retry(1),catchError(this.handleError));
  }
}
