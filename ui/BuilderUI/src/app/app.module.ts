import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { ShowBuilderComponent } from './builder/show-builder/show-builder.component';
import { AddEditBuilderComponent } from './builder/add-edit-builder/add-edit-builder.component';
import { ProjectComponent } from './project/project.component';
import { ShowProjectComponent } from './project/show-project/show-project.component';
import { AddEditProjectComponent } from './project/add-edit-project/add-edit-project.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    ShowBuilderComponent,
    AddEditBuilderComponent,
    ProjectComponent,
    ShowProjectComponent,
    AddEditProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
