import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

   title = 'obasi';
   model: Employee;
   languages = [];
   hasPrimaryLanguageError = false;
   hasFirstNameError = false;
   hasLastNameError = false;
   startDate:  Date;

  constructor(private formPoster: FormPoster) {
    this.formPoster.getLanguages().subscribe(
      data => this.languages = data.languages,
      err => console.log('get error: ', err)
    );
  }

  ngOnInit() {
    this.model = new Employee('', '', true, 'w2', 'default');
  }

  // METHODS ++++++++++++++++++
  submitForm(form: NgForm) {
    console.log(form.value);

    // Validate Form
        // validate form

    // ==validate firstName and lastName
    this.validateFirstName(this.model.firstName);
    this.validateLastName(this.model.lastName);
    if (this.hasLastNameError || this.hasFirstNameError) {
      return;
    }
    // ==validate Primary Language
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if (this.hasPrimaryLanguageError) {
      return;
    }

    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('success: ', data),
        error => console.log('error: ', error)
      );


}  // closes submitForm

lastNameToUpper(value: string) {
    if (value.length > 0) {
      this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.lastName = value;
    }

}

firstNameToUpper(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
}

validatePrimaryLanguage(value) {
    console.log('lang: ' + this.model.primaryLanguage);
    if ( value === 'default') {
        this.hasPrimaryLanguageError = true;
    } else {
      this.hasPrimaryLanguageError = false;
    }
}

validateFirstName(value) {
    if ( value === '') {
      this.hasFirstNameError = true;
    } else {
      this.hasFirstNameError = false;
    }
}

validateLastName(value) {
    if (value === '') {
      this.hasLastNameError = true;
    } else {
      this.hasLastNameError = false;
    }
  }

}
