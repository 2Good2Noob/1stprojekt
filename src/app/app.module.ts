import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponentModule } from 'projects/navbar/src/lib/adapters/primary/ui/navbar.component-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseTaskServiceModule } from 'projects/task/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponentModule,
    ReactiveFormsModule,
    TooltipModule,
    FirebaseTaskServiceModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
