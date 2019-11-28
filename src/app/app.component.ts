import { Component } from '@angular/core';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'etec-base';
  foto = 'favicon.ico';
  nome: string = "Thiago";
  
  msgAlerta(): void {
    alert('Livro Angular 2');
    }
}


