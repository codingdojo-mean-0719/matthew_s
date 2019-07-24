import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Note } from '../../note.interface';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() notes: Note[] = [];
  constructor() { }

  ngOnInit() {
  }

  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }

}
