import { Component, OnInit } from '@angular/core';
import Game from '../models/Game';
import { GameSaverService } from '../services/game-saver.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  game: Game | undefined;

  constructor(public gameSaver: GameSaverService, public router: Router) { }

  ngOnInit(): void {
    let game = this.gameSaver.Load();
    if (!!game) {
      this.game = game;
    }
    else {
      this.router.navigate(['/new-game']);
    }
  }
}
