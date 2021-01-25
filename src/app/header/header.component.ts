import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() changeContent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  gotoPage(type: string) {
    this.changeContent.emit(type);
  }

}
