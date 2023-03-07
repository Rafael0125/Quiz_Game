import { Component, OnInit } from '@angular/core';
import { Questoes } from '../shared/questoes.model';
import { QUESTOES } from './questoes-mock';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public questoes:Questoes[]=QUESTOES
  public rodada:number = 0
  public questao:Questoes = this.questoes[this.rodada]

  public placar:number = 0

  constructor() {
  }

  ngOnInit() {}

  public responder(resposta:Event){
    let teste = (<HTMLInputElement> resposta.target).value

    if(teste === this.questao.respostaCerta){
      alert('Resposta Correta ')
      this.placar ++
      this.rodada ++

      this.atualizaRodada()

      if(this.rodada === this.questoes.length){
        alert('Jogo encerrado')
      }

    } else{
      alert('Resposta Errada')
      this.rodada ++
      this.atualizaRodada()


    }
  }

  public atualizaRodada(): void{
    this.questao = this.questoes[this.rodada]
  }

}
