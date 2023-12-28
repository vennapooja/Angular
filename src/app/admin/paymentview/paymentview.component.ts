import { Component } from '@angular/core';
import { Admin } from '../../model/admin';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from '../../service/hotels.service';

@Component({
  selector: 'app-paymentview',
  templateUrl: './paymentview.component.html',
  styleUrl: './paymentview.component.css'
})
export class PaymentviewComponent {
  payment:any;
hasSearchId: boolean;
searchId: number;
p: number = 1;
count: number = 5;
  admin: Admin;
constructor(private resturantManageService:HotelsService,public router:Router, private activeRoute:ActivatedRoute) { }
  ngOnInit(): void 
      {
        this.activeRoute.paramMap.subscribe(()=>this.admin=JSON.parse(sessionStorage.getItem("admin")))
        this.activeRoute.paramMap.subscribe(()=>this.getAllPayments());
        this.checkSessionAndNavigate();
      }
      getAllPayments()
    {
      this.hasSearchId = this.activeRoute.snapshot.paramMap.has("bookingId");
         if(this.hasSearchId)
         {this.searchId  = Number(this.activeRoute.snapshot.paramMap.get("bookingId"));
          console.log(this.searchId)
          this.resturantManageService.getpaymentbyid(this.searchId).subscribe(data=>{
          console.log(data);
          this.payment= data;
          })
        }
        else{
        this.resturantManageService.getAllPayments().subscribe(data=>{
          console.log(data);
          this.payment=data;
        });
      }
    }
    deleteOrder(id:number):void{
      console.log(id);
      if(confirm("Do you want to delete ?")){
        this.resturantManageService.deletePayment(id).subscribe(data=>{
          console.log(data);
          this.getAllPayments();
        })
      };
    }
    logout() {
      if (sessionStorage.getItem("admin")) {
        sessionStorage.clear()
        localStorage.clear()
        alert("Logout Successfully")
        this.router.navigateByUrl("/login")
      }
      else {
        alert("No user loged in")
      }
    }
    checkSessionAndNavigate() {
      if (!this.admin) {
        this.router.navigateByUrl("/admin/login");
      }
    }
}



