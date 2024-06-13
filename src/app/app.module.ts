import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTreeComponent } from './user-tree/user-tree.component';
import { UserNodeComponent } from './user-node/user-node.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  declarations: [AppComponent, UserTreeComponent, UserNodeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
