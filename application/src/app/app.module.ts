import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KokoroHeaderComponent } from './kokoro-header/kokoro-header.component';
import { KokoroMainLeftComponent } from './kokoro-main-left/kokoro-main-left.component';
import { KokoroMainRightComponent } from './kokoro-main-right/kokoro-main-right.component';
import { KokoroFooterComponent } from './kokoro-footer/kokoro-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    KokoroHeaderComponent,
    KokoroMainLeftComponent,
    KokoroMainRightComponent,
    KokoroFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }