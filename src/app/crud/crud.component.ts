import { Component, OnInit } from '@angular/core';
import { PseudoServiceService } from '../pseudo-service.service';
import { PostModel } from './post.model';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  posts: PostModel[];

  constructor(public service: PseudoServiceService) {
  }

  getPosts() {
    this.service.getPosts().subscribe(post => (this.posts = post))
  }
  ngOnInit(): void {
    this.getPosts();
  }

}
