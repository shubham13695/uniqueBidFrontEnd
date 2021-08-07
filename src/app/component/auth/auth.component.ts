import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  s = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&response_type=token&redirect_uri=http://localhost:4200/&client_id=802829239496-ag98s338jh84cv2rjcqmkr88or2moalc.apps.googleusercontent.com`;
  windowRef: Window | null | undefined;

  constructor() {
  }

  ngOnInit(): void {

  }

  openLoginWindow() {
    window.location.href = this.s;
  }

}
