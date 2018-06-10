import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.css']
})
export class GuestlistComponent implements OnInit {

  guestSearch: Person = new Person();
  guests: Person[];

  //method to find people
  findPeople(): void {
    console.log('search button clicked');
    this.peopleService.getPeople(this.guestSearch).subscribe(results => this.guests = results);
  }

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(results => this.guests = results);
    this.guestSearch.firstName = "Bill";
    this.guestSearch.lastName = "Wright";
  }

}
