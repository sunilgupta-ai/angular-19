import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { WebComponent } from './web.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ Import this


@NgModule({
  declarations: [HomeComponent,HeaderComponent,FooterComponent,WebComponent,RegisterComponent,LoginComponent],
  imports: [
    CommonModule,
    WebRoutingModule,
    ReactiveFormsModule
  ],
  exports: [ // Export FooterComponent so it can be used in other modules
  ]
})
export class WebModule { }
