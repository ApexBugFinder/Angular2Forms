import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormPoster } from './services/form-poster.service';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { DatepickerConfig } from 'ng2-bootstrap/datepicker/datepicker.config';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TimepickerComponent } from 'ngx-bootstrap/timepicker/timepicker.component';
import { TimepickerConfig } from 'ngx-bootstrap/timepicker/timepicker.config';
import { FormsComponent } from './forms/forms.component';
import { TimeComponent } from './time/time.component';
import { DateBasicComponent } from './date-basic/date-basic.component';
import { ButtonsBasicComponent } from './buttons-basic/buttons-basic.component';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TimeComponent,
    DateBasicComponent,
    ButtonsBasicComponent,
  ],
  imports: [
    BrowserModule,
    DatepickerModule,
    RouterModule.forRoot([
      { path: 'forms', component: FormsComponent},
      { path: 'time', component: TimeComponent },
      { path: 'date', component: DateBasicComponent },
      { path: 'buttons', component: ButtonsBasicComponent }
    ]),
    TimepickerModule.forRoot(),
    FormsModule,
    HttpModule,
    ButtonsModule
  ],
  providers: [ FormPoster, DatepickerConfig, TimepickerConfig ],
  bootstrap: [AppComponent]
})
export class AppModule { }
