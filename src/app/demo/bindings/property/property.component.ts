import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  standalone: false,
  templateUrl: './property.component.html',
  styleUrl: './property.component.scss'
})
export class PropertyComponent {
  isDisabled:boolean = true;

  isDisabledBtn1: boolean = true;
  isDisabledBtn2: boolean = false;

  onBtn1Click(){
    this.isDisabledBtn1 = true;
    this.isDisabledBtn2 = false;
  }

  onBtn2Click(){
    this.isDisabledBtn1 = false;
    this.isDisabledBtn2 = true;
  }
}
