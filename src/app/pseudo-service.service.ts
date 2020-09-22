import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from './crud/post.model';
const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type' : 'application/json; charset=UTF-8'
  })
}


@Injectable({
  providedIn: 'root'
})
export class PseudoServiceService {
  private posts: PostModel[];
  private postsUrl: string = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { }
  printToConsole(args) {
    console.log(args);
  }
  getPosts() {
    return this.http.get<PostModel[]>(`${this.postsUrl}`)
    
  }
}
