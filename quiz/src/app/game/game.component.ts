import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Questoes } from '../shared/questoes.model';
import { QUESTOES } from './questoes-mock';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  public questoes:Questoes[]=QUESTOES
  public rodada:number = 0
  public questao:Questoes = this.questoes[this.rodada]

  public placar:number = 0

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()
  

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

  public responder(resposta:Event){
    let retorno = (<HTMLInputElement> resposta.target).value

    if(retorno === this.questao.respostaCerta){
      this.placar ++
      this.rodada ++
      this.atualizaRodada()

    } else{
      this.rodada ++
      this.atualizaRodada()
    }
    if(this.rodada === this.questoes.length){
      alert(`Jogo encerrado, você acertou ${this.placar} de ${this.questoes.length}`)

      if(this.placar === this.questoes.length){
        this.encerrarJogo.emit('vitoria')
      }if(this.placar !== this.questoes.length){
        this.encerrarJogo.emit('derrota')
      }
    }
  }

  public atualizaRodada(): void{
    this.questao = this.questoes[this.rodada]
  }

}
