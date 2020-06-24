import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './server/servers/servers.component';
// import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, 
    ServersComponent, 
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    // HttpModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
