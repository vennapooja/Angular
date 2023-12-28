import { Component } from '@angular/core';
import { Admin } from '../../model/admin';
import { AdminService } from '../../service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  admin:Admin =new Admin(0,"firstName","lastName","nameofadmin","pass_word","emailId","contact");
  isEditable: any;

  constructor(private adminservice:AdminService,private router:Router) { }

  ngOnInit(): void 
  {
    
  }
  SaveAdmin(){
    if(this.isEditable){
      this.adminservice.updateAdmin(this.admin).subscribe(data=>{
        alert("Successfully updated "+this.admin.nameofadmin)
        sessionStorage.clear()
        localStorage.clear()
        this.router.navigateByUrl("")});
    }
    else{
      
    this.adminservice.SaveAdmin(this.admin).subscribe(data =>{
      alert("Successfully Register ")
      this.router.navigateByUrl("/login")
    },
    error => alert("enter the admin data ")
      );
      
  }
}
}
