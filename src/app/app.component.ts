import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SpotService } from 'src/state/spot/spot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  itineraryDays: number = 0;
  spot: Array<string> = ['Budhadd', 'qwe', 'asdf'];
  duration: Array<number> = [2, 3, 5];
  transport: Array<string> = ['bus', 'train', 'taxi'];
  dataSource = ELEMENT_DATA;
  displayedColumns = ['order', 'spot', 'duration', 'transport'];
  invalidMessage: string = '';
  itineraryForm = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
  });

  constructor(private spotServ: SpotService) {}
  ngOnInit(): void {
    const data = [
      { order: 1 },
      { order: 2 },
      { order: 3 },
      { order: 4 },
      { order: 5 },
    ];
    //  this.acc_desc = data;
    //  this.dataSource1.data = (data as Element[]);
  }

  onSet() {
    this.invalidMessage = '';
    if (
      this.itineraryForm.controls['startDate'].value >
      this.itineraryForm.controls['endDate'].value
    ) {
      this.invalidMessage =
        'The end date cannot be earlier than the start date';
      console.warn('Invalid Input');
    } else if (
      this.itineraryForm.controls['startDate'].value === '' ||
      this.itineraryForm.controls['endDate'].value === ''
    ) {
      this.invalidMessage = 'The input cannot be empty';
      console.warn('Invalid Input');
    } else {
      let start = new Date(
        this.itineraryForm.controls['startDate'].value
      ).getTime();
      let end = new Date(
        this.itineraryForm.controls['endDate'].value
      ).getTime();
      let timeDifference = end - start;
      this.itineraryDays = timeDifference / (1000 * 3600 * 24);
      // this.spotServ.getAllSpot(start, end, this.itineraryDays);
    }
  }
}

export interface Element {
  order: number;
  spot: any;
  duration: number;
  transport: any;
}

const ELEMENT_DATA: Element[] = [
  { order: 1, spot: 'Budhadd', duration: 1, transport: 'Bus' },
  { order: 2, spot: 'Budhadd', duration: 1, transport: 'Bus' },
  { order: 3, spot: 'Budhadd', duration: 1, transport: 'Bus' },
  { order: 4, spot: 'Budhadd', duration: 1, transport: 'Bus' },
  { order: 5, spot: 'Budhadd', duration: 1, transport: 'Bus' },
];
