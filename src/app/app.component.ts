import { Component } from '@angular/core';
import { Goal } from './goal';

export class AppComponent{
  goals
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  goals:string[];

  constructor(){
    this.goals = ['Watch finding Jojo', 'Buy Cookies', 'Get new Phone']

  }
}
