import { AboutComponent } from './header/about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './header/services/services.component';
import { ContactComponent } from './header/contact/contact.component';


const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'post', component:BlogPostComponent},
  {path:'about', component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'contact', component:ContactComponent},
  {path:'**',component:PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }