import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
profile=[
  {'id':1,'name':'EDU ANG','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/1.png'},
  {'id':2,'name':'EDU JS','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/2.png'},
  {'id':3,'name':'EDU HTML','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/1.png'},
  {'id':4,'name':'EDU CSS','description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/2.png'}
]
}
