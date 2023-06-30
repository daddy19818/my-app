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
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { SearchImagesComponent } from './search-images/search-images.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ZoomImageComponent } from './zoom-image/zoom-image.component';
const route :Routes = [
  {path:'Home', component:DashBoardComponent},
  {path:'Table',component:TableComponent},
  {path:'Users',component:UsersDetailsComponent},
  {path:'Search',component:SearchImagesComponent},
  {path:'zoom-image',component:ZoomImageComponent}

]


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
    SideNavComponent,
    DashBoardComponent,
    TableComponent,
    UsersDetailsComponent,
    SearchImagesComponent,
    ZoomImageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    RouterModule.forRoot(route),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
