import { Component, OnInit } from '@angular/core';
import { PseudoServiceService } from '../pseudo-service.service';
import { PostModel } from './post.model';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  posts: any = [];

  constructor(public service: PseudoServiceService) {
  }

 
  ngOnInit(): void {
    this.service.getPosts().subscribe(res => {
      console.log(res);
      this.posts = res;
    })
  }

  deletePost(id) {
    this.posts = this.posts.filter(ele => {
      return ele.id !== id
    })
    this.service.deletePost(id).subscribe(
      res=> {
        console.log(res)
      },
      error=> {
        console.log(error)
      })
  }

}
