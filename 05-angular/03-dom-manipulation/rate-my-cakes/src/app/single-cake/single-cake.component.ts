import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-cake',
  templateUrl: './single-cake.component.html',
  styleUrls: ['./single-cake.component.css']
})
export class SingleCakeComponent implements OnInit {
  @Input() selectedCake: any;
  constructor() { }

  ngOnInit() {
  }

}
