import { Component, OnInit } from '@angular/core';
import {  faPhoneAlt, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'solid-stone-app';
  faPhoneAlt = faPhoneAlt;
  faEnvelope = faEnvelope;
  faBars=faBars; 
  seconColorNav: boolean;

  constructor(){

  }
  ngOnInit(): void{

  }
  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  changeColorNav(n){
    this.seconColorNav = n;
    console.log(this.seconColorNav);
  }


  public isCollapsed = true;
}
