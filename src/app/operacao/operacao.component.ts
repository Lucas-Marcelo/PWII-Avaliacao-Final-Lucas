import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { OperacaoAPIServiceService } from '../service/operacao-apiservice.service';
import { Observable } from 'rxjs';
import { Avaliacao } from '../model/avaliacao';

@Component({
  selector: 'has-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {

  formAvaliacao: FormGroup;

  constructor(public formBuilder: FormBuilder, private service: OperacaoAPIServiceService) { }

  ngOnInit() {
    this.formAvaliacao = this.formBuilder.group({
      num1:         this.formBuilder.control(''),
      num2:         this.formBuilder.control('')
    })
  }

  onProcessar() {
    let avaliacao : Avaliacao = this.formAvaliacao.value;

    this.service.createAvaliacao(avaliacao)
    .subscribe(data => alert(data),
    error => console.log(error));
  }
}
