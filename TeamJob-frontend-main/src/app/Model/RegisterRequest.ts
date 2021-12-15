export class RegisterRequest

{
  private username:String;
  private email:String;
  private password:String;
  constructor()
  {

  }
  get getUsername():String{
    return this.username;
  }
  set setUsername(name:String){
     this.username=name;
  }
  get getEmail():String{
    return this.email;
  }
  set setEmail(email:String){
     this.email=email;
  }

  get getPassword():String{
    return this.password;
  }
  set setPassword(password:String){
     this.password=password;
  }

}
