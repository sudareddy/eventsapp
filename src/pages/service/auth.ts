import { Injectable } from '@angular/core';
 
export interface User {
  name: string;
  role: number;
}
 
@Injectable()
export class AuthProvider {
  currentUser: User;
 
  constructor() { }
 
  login(name: string, pw: string) : Promise<boolean> {
      console.log("name : "+name+" : pw : "+pw);
    return new Promise((resolve, reject) => {
      if (name === '123' && pw === '123') {
          console.log("hi in if");
        this.currentUser = {
          name: name,
          role: 0
        };
        resolve(true);
      } else if (name === '456' && pw === '465') {
          console.log("hi in else");
        this.currentUser = {
          name: name,
          role: 1
        };
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }
 
  isLoggedIn() {
    return this.currentUser != null;
  }
 
  isAdmin() {
      console.log("hi in line no : 42");
      if(this.currentUser != undefined){
          console.log("hi in line no 44")
        return this.currentUser.role === 0;
      }
  }
 
  logout() {
    this.currentUser = null;
  }
}