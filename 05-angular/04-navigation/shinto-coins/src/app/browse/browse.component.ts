import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  activity = {};
  constructor(private shintoService: ShintoService) {
    this.activity = this.shintoService.getLedger();
  }

  ngOnInit() {
  }

}
