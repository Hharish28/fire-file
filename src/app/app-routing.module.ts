import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';

const routes: Routes = [
  {
    path : "/",
    component : UploadDetailsComponent
  },
  {
    path : "/upload-form",
    component : UploadFormComponent
  },
  {
    path : "/upload-list",
    component : UploadListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
