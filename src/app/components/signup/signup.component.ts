import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private router: Router) {

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
    // 显示警告框
    window.alert('Inscription réussie!');
    this.router.navigate(['/login']);

  }

}
