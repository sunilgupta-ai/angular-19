import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WebModule } from './web/web.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    WebModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
