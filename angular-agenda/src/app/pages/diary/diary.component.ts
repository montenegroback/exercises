import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.scss']
})
export class DiaryComponent implements OnInit {

  diaryForm: FormGroup;
  diaries: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.diaryForm = this.formBuilder.group({
      name : [null, Validators.required],
      lastName : [null, Validators.required],
      age : [null, Validators.required],
      email : [null, [Validators.required, Validators.email]],
    });
  }

  async onFormSubmit(form: NgForm) {
    this.diaries.push(form);
    this.diaryForm.reset();
    console.log(form);
  }

  diaryDelete(indexDiary) {
    this.diaries.splice(indexDiary, 1);
  }
}
