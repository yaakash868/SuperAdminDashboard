import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(){
    this.router.navigate(['/SuperAdminDashboard']).then(() => {
      window.location.reload();
    });
  }
  goToSignUp(){
    console.log("login succesfull");
    this.router.navigate(['/Registeration']);

  }
  passLoginData(data:any){

  }
}
