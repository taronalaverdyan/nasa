import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users = ["Bob","Ann","Artur"]
  constructor() { }

  ngOnInit() {
  }

}
