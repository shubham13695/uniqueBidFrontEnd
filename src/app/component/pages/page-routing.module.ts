import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

const PageRoutes:Routes = [
    {
        path:'active',
        component:HomeComponent
    },
    {
        path:'upcomming',
        component:HomeComponent
    },
    {
        path:'results',
        component:HomeComponent
    },
    {
        path:'',
        redirectTo:'active'
    }
]

@NgModule({
    imports:[RouterModule.forChild(PageRoutes)],
    exports:[RouterModule]
})

export class PageRouting{
    
}