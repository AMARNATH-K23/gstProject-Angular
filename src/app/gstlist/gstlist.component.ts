import { Component, OnInit } from '@angular/core';
import { GstserviceService } from '../gstservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gstlist',
  templateUrl: './gstlist.component.html',
  styleUrls: ['./gstlist.component.css']
})
export class GstlistComponent implements OnInit {
  persArr: any = [];
  pers: any = {};
  id: any;
  userId: any;
  countryObj: any = {};
  constructor(private _GstserviceService: GstserviceService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this._GstserviceService.getAllPers().subscribe(response => {
      console.log(response)
      this.persArr = response.data;
    }, err => {
      console.log(err)
    });
  }
  submit() {
    console.log(this.pers);
    this.pers.createdBy = this.userId;
    this.pers.status = "ACTIVE";
    this.pers.countryObj = { "id": "022ce38a-d216-41b9-80a2-a247d32ebf1e" };
    console.log(this.pers);
    this._GstserviceService.addPers(this.pers).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })

  }
}
