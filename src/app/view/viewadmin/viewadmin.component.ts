import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewadmin',
  templateUrl: './viewadmin.component.html',
  styleUrl: './viewadmin.component.css'
})
export class ViewadminComponent implements OnInit {
  admin: any;
  hasSearchName: boolean;
  searchName: string;
  p: number = 1;
  count: number = 5;
  

  constructor(private adminService:AdminService,private router:Router,private activateRoute:ActivatedRoute) { }
  ngOnInit():void{
    this.getAllAdmin();
  }
  getAllAdmin():void
{
  this.hasSearchName=this.activateRoute.snapshot.paramMap.has("nameofadmin");
  if(this.hasSearchName)
  {
    this.searchName=this.activateRoute.snapshot.paramMap.get("nameofadmin");
    console.log(this.searchName)
    this.adminService.getAdminByNameOfAdmin(this.searchName).subscribe(data=>{
      console.log(data);
      this.admin=data;
    })
  }
else{
  this.adminService.getAllAdmin().subscribe(data=>{
    console.log(data);
    this.admin=data;
  });
}
}
  
 addAdmin():void{
    this.router.navigateByUrl("/adminform");
  }
  deleteAdmin(id:number)
{
  console.log(id);
  if(confirm("Do you want to delete ?"))
  {
    this.adminService.deleteAdmin(id).subscribe((data: any)=>{
      console.log(data);
      this.getAllAdmin();
    })
  };
}
updateAdmin(id:number)
{
  this.router.navigateByUrl("/updateAdmin/"+id);

}

}

  
