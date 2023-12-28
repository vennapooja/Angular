import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user = {
    username: '',
    userpassword: ''
  };

  Getlogin() {
    // Your login logic goes here
    console.log('Login logic to be implemented');
  }
}