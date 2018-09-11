import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { serverComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UdemyComponent } from './udemy/udemy.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent,
    ServersComponent,
    UdemyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
