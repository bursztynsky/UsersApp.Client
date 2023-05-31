import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  onSubmit() {
    const amount = this.userForm.value.amount;

    if (amount < 1 || amount > 200) return;

    this.dataService.getUsers(amount).subscribe();
  }

  createForm(): void {
    this.userForm = this.formBuilder.group({
      amount: [
        1,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(200),
          Validators.pattern(/^[1-9]\d*$/),
        ],
      ],
    });
  }
}
