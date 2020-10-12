import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChitietComponent } from './chitiet/chitiet.component';
import { ListComponent } from './list/list.component';
import { Router, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'list/chitiet/:id',
    component: ChitietComponent,
  }
]

@NgModule({
  declarations: [ChitietComponent, ListComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ChitietComponent, 
    ListComponent
  ]
})
export class ProductModule { }
