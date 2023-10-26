import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { szazalekSzamol, jegySzamol } from '../szamitas';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  eredmenyekUrlap : FormGroup;
  szazalek: number;
  erdemjegy : string;

  constructor(){
    this.szazalek = 0;
    this.erdemjegy = '';
    this.eredmenyekUrlap = new FormGroup({
      spgwP : new FormControl('', [Validators.required, Validators.min(0), Validators.max(30)]),
      tablP : new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)]),
      adbazP : new FormControl('', [Validators.required, Validators.min(0), Validators.max(30)]),
      algoP : new FormControl('', [Validators.required, Validators.min(0), Validators.max(45)]),
      szobP : new FormControl('', [Validators.required, Validators.min(0), Validators.max(30)])
    });
    
  }
  onSubmit(){
    this.szazalek = szazalekSzamol(this.eredmenyekUrlap);
    this.erdemjegy = jegySzamol(this.szazalek);
  }
  formChange(){
    this.szazalek = 0
    this.erdemjegy = ''
  }
  
}
