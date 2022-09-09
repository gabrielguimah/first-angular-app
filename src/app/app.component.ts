import { Component } from '@angular/core';
import { TransferencesService } from './services/transferences.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  constructor(private  service: TransferencesService){}
}
