import { Transference } from './../models/transference.model';
import { Component, OnInit, Input } from '@angular/core';
import { TransferencesService } from '../services/transferences.service';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.css']
})
export class ExtractComponent implements OnInit {
  transferences: any[]

  constructor(private service: TransferencesService) { }

  ngOnInit(): void {
   this.service.allTransferences().subscribe((transferences: Transference[]) => {
    console.table(transferences)
    this.transferences = transferences
   })
  }

}
