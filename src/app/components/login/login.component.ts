import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    CommonModule,
    MatRadioGroup,
    MatRadioButton,
    MatIcon,
    RouterLink
  ],
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  //declarer un variable qui peut distinguer le type d'utilisateur,true=Intervenant, false =directeur
  isUserLogin?: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.isUserLogin=true;
  }

  //une methode permet de changer le type d'utilisateur
  changeUserType(){
    this.isUserLogin = !this.isUserLogin;
  }

  setInfoLogIn(username:string,password:string){
  }
}
