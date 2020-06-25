import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './components/pages/main/main.module#MainModule'},
  { path: 'chat', loadChildren: './components/pages/chat/chat.module#ChatModule'},
  { path: 'searchresult', loadChildren: './components/pages/searchresult/searchresult.module#SearchresultModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
