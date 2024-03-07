import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  title = 'my-restaurant-app';

  isClient = true;

  // @ts-ignore
  UserForm: FormGroup;

  // @ts-ignore
  RestaurantForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.UserForm = this.fb.group(
      {
        firstname: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        adresse: ['', [Validators.required]],
        email: ['', [Validators.required]],
        telephone: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }
    );

    this.RestaurantForm = this.fb.group(
      {
        restName: ['', [Validators.required]],
        restAdresse: ['', [Validators.required]],
        restTelephone: ['', [Validators.required]],
        restPassword: ['', [Validators.required]],
      }
    );
  }

  changeUserType(){
    this.isClient = !this.isClient;
  }

  alert() {
    window.alert('inscription réussie!');
  }
}
