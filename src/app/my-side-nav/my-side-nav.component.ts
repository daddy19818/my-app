import { Component } from '@angular/core';

@Component({
  selector: 'app-my-side-nav',
  templateUrl: './my-side-nav.component.html',
  styleUrls: ['./my-side-nav.component.css']
})
export class MySideNavComponent {
  menuItems = [
    {name:'Home    ',icon:'fa fa-home'},
    {name:'Aboutus',icon:'fa fa-diamond'},
    {name:'Services ',icon:'fa fa-bandcamp'},
    {name:'conacts ',icon:'film'},
    {name:'Login   ',icon:'film'},
    {name:'Search   ',icon:'film'},
  ]
isMenuOpen:boolean;
constructor () {
  this.isMenuOpen = false;
}
toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}
addMenu() {
  this.menuItems.push({name:'shop',icon:'film'})
}

}
