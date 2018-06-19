import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; 
import { Api } from '../api'; 

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  apis : Api[];

  setApi() : void {
    this.apiService.getApis().subscribe(data => this.apis = data)
  }

  constructor (private apiService : ApiService) { }

  ngOnInit() {
    this.setApi();
  }
}
