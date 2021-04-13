import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() value = 0;
  @Output() cardSelected = new EventEmitter();

  @Input() disabled = true;

  constructor() { }

  ngOnInit(): void {
  }
  onSelected(): void{
    this.cardSelected.emit(this.value);
  }

 
}
