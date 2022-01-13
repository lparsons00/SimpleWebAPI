import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BuilderComponent } from './builder/builder.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: 'builder', component: BuilderComponent },
  { path: 'project', component: ProjectComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
