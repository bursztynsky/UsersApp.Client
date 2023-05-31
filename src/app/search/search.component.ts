import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @ViewChild('f', { static: false }) slForm: NgForm;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.value.amount);

    this.dataService.getUsers(form.value.amount).subscribe();
  }
}
