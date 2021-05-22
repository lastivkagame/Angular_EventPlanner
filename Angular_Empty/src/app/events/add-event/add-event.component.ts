import { Component, OnInit } from '@angular/core';
import { EventsService } from '../Events.service';
//import { FormsModule } from '@angular/forms';
import { Event } from '../Event.module';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  title: string;
  description: string;
  date: string;
  img_url: string;

  constructor(private service: EventsService) { }

  ngOnInit() {
  }

  addEvent(){
this.service.add(new Event(this.title, this.description, this.date, this.img_url));
  }
}
