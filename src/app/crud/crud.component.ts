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
  title : string = '';
  userId : string = '';
  body : string = '';

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

  createPost(){
    this.service.createPost(this.userId.trim(),this.title.trim(), this.body.trim()).subscribe(
      res =>{
        this.posts.push(res);
        console.log(res);
      },
      error => {
        console.log(error);
      })
  }
  updatePost(id, userId, title, body){
    this.service.updatePost(id, userId, title, body).subscribe(
      res=> {
        console.log(res)
      },
      error=> {
        console.log(error)
      })
  }

}
