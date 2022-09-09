import { Transference } from './../models/transference.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferencesService } from '../services/transferences.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.css']
})
export class NewTransferComponent implements OnInit {

  constructor(private service: TransferencesService, private router: Router) { }

  ngOnInit(): void {
  }

  @Output() onTransfer = new EventEmitter<any>()

  value: number
  destination: number | string

  transfer() {
    const emittedValue: Transference = {
      value: this.value,
      destination: this.destination
    }
    this.service.add(emittedValue).subscribe((result) => {
      console.log(result)
      this.clearFields()
      this.router.navigateByUrl('extract')
    },
    (error) => console.error(error))
  }

  clearFields() {
    this.value = 0
    this.destination = 0
  }

}
