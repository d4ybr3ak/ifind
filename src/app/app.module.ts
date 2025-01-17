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
<<<<<<< HEAD
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { FooterComponent } from './footer/footer.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ServicesComponent } from './services/services.component';
<<<<<<< HEAD
=======
>>>>>>> parent of eac24fb (cleaned route and website)
=======
>>>>>>> fa8f3a03c27283757393070dce4fb08dc1e4a532


const myRoutes: Routes = [
  {path: 'agb', component: AGBComponent},
  {path: 'data-protection', component: DataProtectionComponent},
  {path: 'home', component: HomeComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'findtube', component: FindtubeComponent},
  {path: 'productcomparison', component: ProductComparisonComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'product-list', component: ProductListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ImpressumComponent,
    AGBComponent,
    DataProtectionComponent,
    HomeComponent,
    ProductComparisonComponent,
<<<<<<< HEAD
    FindtubeComponent,
    NavComponent,
    ContactComponent,
    BlogComponent,
    LoginComponent,
    AddProductComponent,
    AdminDashboardComponent,
    NewsLetterComponent,
    FooterComponent,
    NewUserComponent,
    ProductListComponent,
    UserListComponent,
    ServicesComponent
<<<<<<< HEAD
=======
    FindtubeComponent
>>>>>>> parent of eac24fb (cleaned route and website)
=======
>>>>>>> fa8f3a03c27283757393070dce4fb08dc1e4a532
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
