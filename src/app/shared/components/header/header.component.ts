import { Component,  OnInit } from '@angular/core';
// import * as $ from 'jquery';
 declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $('.dropdown').dropdown();

    $('.ui.sidebar').first().sidebar('attach events', '.ui.icon.item .bars');
  }
}
