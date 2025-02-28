import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: false,
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  helloText:string = "hello?";

  onBtnClick() {
    alert("Tu as cliqué sur le bouton?!");
  }

  onOverText(){
    console.log("Tu es passé au dessus du texte!");
    this.helloText += "hello!";
  }
}
