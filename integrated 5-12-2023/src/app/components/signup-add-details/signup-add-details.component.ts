import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-add-details',
  templateUrl: './signup-add-details.component.html'
})
export class SignupAddDetailsComponent implements OnInit {

  signupForm: FormGroup;
  ngOnInit(): void {

    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.email]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      companyname: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  // Reactive form input elements with validations
  selectedFile: File[] | null = [];

  onFileSelected(input: any): void {
    this.selectedFile = input.files;
    console.log(this.selectedFile);

    const fileList: FileList = input.target.files;
    for (let i = 0; i < fileList.length; i++) {
      const file: File = fileList.item(i);
      if (file && file.size > 10 * 1024 * 1024) {
        alert('File size exceeds 10MB limit');
        input.target.value = '';
      } else {
        this.selectedFile = input.files;
        console.log(this.selectedFile);
      }
    }
  }

  onSubmit() {

  }
}
