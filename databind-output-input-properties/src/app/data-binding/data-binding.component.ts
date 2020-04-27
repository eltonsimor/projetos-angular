import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://i.picsum.photos/id/654/400/200.jpg';

  valorAtual: string = "";
  valorSalvo: string = "";

  isMouseOver: boolean = false;

  nome: string = 'abc';

  valorInicial = 15;

  pessoa: any = {
    nome: 'def',
    idade: 32
  }

  nomeDoCurso: string = 'Angular';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado!');
  }

  onKeyUp(event: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement> event.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(event) {
    console.log(event.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
