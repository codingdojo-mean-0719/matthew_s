import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Note } from '../note.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  notes: Note[] = [];
  newNote: {};
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getNotesFromService();
    this.newNote = { note: '' };
  }

  getNotesFromService() {
    this.httpService.getNotes().subscribe(notes => {
      this.notes = notes;
    });
  }
  addNote() {
    this.httpService.addNote(this.newNote).subscribe(data => {
      console.log(data);
      this.getNotesFromService();
      this.newNote = { note: '' };
    })
  }

}
