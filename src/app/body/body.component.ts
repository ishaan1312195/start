import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  questionNumber = 1;
  constructor() { }

  ngOnInit() {
  }

  clicked(event) {
    if (this.questionNumber === 15) {
      console.log('show result');
    } else {
      this.questionNumber++;
      console.log('next pressed');
    }

  }
}
