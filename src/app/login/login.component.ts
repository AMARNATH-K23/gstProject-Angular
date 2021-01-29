import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  gstArr: any = [];
  gst: any = {};
  id: any;
  constructor(private _LoginService: LoginService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  submit() {
    console.log(this.gst);
    this._LoginService.addGst(this.gst).subscribe(res => {
      localStorage.setItem('userId', res.data.loginObj.userId)
      console.log(res);
      localStorage.setItem('currentUser', JSON.stringify(res));
      localStorage.setItem('token', res.data.jwt);
      localStorage.setItem('isProductOwner', res.data.loginObj.agentObj.isProductOwner);
      this.router.navigate(['/gstlist'])
    }, err => {
      console.log(err)
    });
  }

}
