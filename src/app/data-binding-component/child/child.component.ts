import { Component, Input, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() GivemeData:any;

@Input() click= new EventEmitter;
TriggerClickEvent() {
  this.click.emit('Message Read')
}
}
