import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos:any;
  username:string;

  constructor(private userProfileService: UserProfileService) {

   }

   findProfile(){
     this.userProfileService.updateProfile(this.username);
         this.userProfileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });

    this.userProfileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
   }

  ngOnInit() {
  }

}
