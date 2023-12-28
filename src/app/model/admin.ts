export class Admin
 {
    adminId:number;
    firstName:string;
    lastName:string;
    nameofadmin:string;
    password:string;
    emailId:string;
    contact:string;

    constructor( adminId:number, firstName:string,lastName:string,nameofadmin:string,password:string, emailId:string,contact:string)
    {
        this.adminId=adminId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.nameofadmin=nameofadmin;
        this.password=password;
        this.emailId=emailId;
        this.contact=contact;
    }

}


