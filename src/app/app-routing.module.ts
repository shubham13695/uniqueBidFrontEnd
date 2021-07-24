import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  {
    path:'login',
    loadChildren:()=>import("./component/auth/auth.module").then(m=>m.AuthModule)
  },
  {
    path:'',
    component:WrapperComponent,
    children:[
      {
        path:"home",
        loadChildren:()=>import("./component/pages/pages.module").then(m=>m.PagesModule),
      },
      {
        path:"",
        redirectTo:'home',
        pathMatch:"full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
