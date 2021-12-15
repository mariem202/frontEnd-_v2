export class Etudiant{
private id:number;
private FirstName:String;
private password:String;
private email:String;
private phoneNumber:number;

constructor()
{}

get Id():number{
  return this.id;
}
set Id(id:number){
   this.id=id;
}
get firstName():String{
  return this.FirstName;
}
set firstName(name:String){
   this.FirstName=name;
}

get Password():String{
  return this.password;
}
set Password(password:String){
   this.password=password;
}

get phone():number{
  return this.phoneNumber;
}
set phone(phoneNumber:number){
   this.phoneNumber=phoneNumber;
}
get Email():String{
  return this.email;
}
set Email(email:String){
   this.email=email;
}

}
