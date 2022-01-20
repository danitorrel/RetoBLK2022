import { Component, Input, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-first-question',
  templateUrl: './first-question.component.html',
  styleUrls: ['./first-question.component.scss']
})
export class FirstQuestionComponent implements OnInit {
  @Input() userName: any;
  constructor() { }

  ngOnInit(): void {   
  }

  options = new Set(['Acciones', 'Bonos', 'Derivados', 'Opciones', 'EFT\'s', 'Fondo de inversión', 'Commodity', 'Moneda/ Tipo de Cambio', 'Cetes', 'Crypto']);
 
  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
    console.log(chip.value)
 }
}





