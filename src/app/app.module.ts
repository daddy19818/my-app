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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



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
    RoundButtonDirective,
    SideNavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
