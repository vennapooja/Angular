export class User {
  username: string ;
  usersName: string;
  userPhone: string;
  userpassword: string;
  userId:number;
  email : string;
  constructor(userId:number, usersName:string, userPhone:string, username:string, userpassword:string , email : string) {
          this.userId = userId;
          this.usersName = usersName;
          this.userPhone = userPhone;
          this.username = username;
          this.userpassword = userpassword;
          this.email= email;
  }

}
