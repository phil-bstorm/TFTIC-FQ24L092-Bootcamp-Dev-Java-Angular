import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way',
  standalone: false,
  templateUrl: './one-way.component.html',
  styleUrl: './one-way.component.scss'
})
export class OneWayComponent {
  monText:string = "Un super text dans une variable!";
  private maVariablePrivee = "Ce texte ne peux pas etre afficher dans l'html";

  tableauString: string[] = ["hello", "world"];
  unNombre:number = 42;
  unObjetAny: any = {prenom: "Philippe", nom: "Haerens"};
  unObjetType: {prenom: string, nom: string} = {prenom: "Philippe", nom: "Haerens"};
  variableNull: null = null;
}
