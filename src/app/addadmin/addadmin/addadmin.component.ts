import { Component, OnInit } from '@angular/core';
import { Admin } from '../../model/admin';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrl: './addadmin.component.css'
})
export class AddadminComponent implements OnInit {
  admin:Admin =new Admin(0,"","","","","","");
    isEditable: boolean ;
    activateRoutesnapshot: any;
    constructor(private adminService:AdminService,private router:Router,private activateRoute:ActivatedRoute){}
    ngOnInit(): void {
      this.admin
      this.activateRoute.paramMap.subscribe(()=>this.admin);
      this.getAdminByAdminId();
      
  
    }
    onSubmit()
    {
      console.log(this.admin);
      if(this.isEditable){
        this.adminService.updateAdmin(this.admin).subscribe((data: any)=>
          this.router.navigateByUrl("/adminlist"));
  
      }
      else{
  
      
      this.adminService.SaveAdmin( this.admin ).subscribe(data =>
        console.log(data));
        this.router.navigateByUrl("/adminlist");
    }}
    getAdminByAdminId(){
      const adminId  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
  
    console.log(adminId);
    if(adminId> 0)
    {
      this.isEditable = true;
      this.adminService.getAdminById(adminId).subscribe((data: any)=>{
        this.admin = data;
        console.log(this.admin)
      });
    }
    }
  

}


