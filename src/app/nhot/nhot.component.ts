import { Component, OnInit } from '@angular/core';
import {IUser} from "../iuser";

@Component({
  selector: 'app-nhot',
  templateUrl: './nhot.component.html',
  styleUrls: ['./nhot.component.css']
})
export class NhotComponent implements OnInit {

  title_page = 'Users'
  users: IUser[] = [
    {
      id: 1,
      name: 'nam',
      email: 'nam@gmail.com'
    },
    {
      id: 2,
      name: 'vinh',
      email: 'vinh@gmail.com'
    },
    {
      id: 3,
      name: 'duc',
      email: 'duc@gmail.com'
    }
  ]

  userFilter =[];
  constructor() { }

  ngOnInit(): void {
    this.userFilter = this.users;
  }
  search(event){
    let keyword = event.target.value;
    this.userFilter = (keyword) ? this.filerByKeyword(keyword): this.users;
  }

  filerByKeyword(keyword) {
    return this.users.filter(user => {
      return user.name.indexOf(keyword) != -1;
    })
  }
}
