import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {firstcomponent} from './first/first.component';
import { UserInlineStyleComponent } from './user-inline-style/user-inline-style.component';
import { UserInlineComponent } from './user-inline/user-inline.component';
import { DataComponent } from './data/data.component';
import { ParentComponent } from './data-binding-component/parent/parent.component';
import { ChildComponent } from './data-binding-component/child/child.component';
import { MySideNavComponent } from './my-side-nav/my-side-nav.component';
import { RoundButtonDirective } from './round-button.directive';



@NgModule({
  declarations: [
    AppComponent,
    firstcomponent,
    UserInlineStyleComponent,
    UserInlineComponent,
    DataComponent,
    ParentComponent,
    ChildComponent,
    MySideNavComponent,
    RoundButtonDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
