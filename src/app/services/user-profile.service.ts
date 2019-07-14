import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private username:string;
  private clientid = '3378f420410c10de26e2';
  private clientsecret = '856d7a4894f943ee428f3b7b573fc43a18533eba';

  constructor(private http:HttpClient) {
    console.log("service is now ready!");
    this.username = 'waheedmusa';
   }

   getProfileInfo(){ 
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      
   }

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
   }

   updateProfile(username:string){
     this.username = username;
   }
}
