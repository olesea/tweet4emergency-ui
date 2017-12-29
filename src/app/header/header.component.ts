import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  buttonLabel: string;

  @Output()
  clicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {

  }

  connect(): void {
    this.clicked.emit();
  }
}
