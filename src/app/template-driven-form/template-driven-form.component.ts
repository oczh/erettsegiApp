import { Component } from '@angular/core';
import { szazalekSzamol, jegySzamol } from '../szamitas';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  szazalek: number;
  erdemjegy : string;
   
  constructor(){
    this.szazalek = 0;
    this.erdemjegy = '';
  }

  onSubmit(form: any): void{
    this.szazalek = szazalekSzamol(form);
    this.erdemjegy = jegySzamol(this.szazalek);
  }

  formChange(){
    this.szazalek = 0
    this.erdemjegy = ''
  }
}
