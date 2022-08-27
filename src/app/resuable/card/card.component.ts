import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input( ) address ='';
  @Input( ) imageUrl ='';
  @Input( ) username ='';
  @Input( ) content  ='';
  @Input() rate : any;
  @Input() del_rate : any
  @Input() internet = ''
  @Input() offer = ''
  @Input() online = '';
  @Input() yes = ''
  @Input() button = '';
  @Input() Star = ''; 
  constructor() { }

  ngOnInit(): void {
  }

}
