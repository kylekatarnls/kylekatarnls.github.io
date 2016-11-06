import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { PresentationComponent }  from './presentation.component';
import { ProjectsComponent } from "./projects.component";

import { RepositoriesService } from "./repositories.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule
  ],
  declarations: [
    PresentationComponent,
    ProjectsComponent
  ],
  providers: [ RepositoriesService ],
  bootstrap: [ PresentationComponent ]
})
export class PresentationModule { }
