import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { AGBComponent } from './agb/agb.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComparisonComponent } from './product-comparison/product-comparison.component';
import { FindtubeComponent } from './findtube/findtube.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';


const myRoutes: Routes = [
  {path: 'agb', component: AGBComponent},
  {path: 'data-protection', component: DataProtectionComponent},
  {path: '', component: HomeComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'findtube', component: FindtubeComponent},
  {path: 'productcomparison', component: ProductComparisonComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    AGBComponent,
    DataProtectionComponent,
    HomeComponent,
    ProductComparisonComponent,
    FindtubeComponent,
    NavComponent,
    ContactComponent,
    BlogComponent,
    LoginComponent,
    AddProductComponent
  ],
  imports: [
    RouterModule.forRoot(myRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
