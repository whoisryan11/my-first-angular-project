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
  private postsUrl: string = "https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { }
  
  getPosts() {
    return this.http.get<PostModel[]>(`${this.postsUrl}`)
  }
  deletePost(id) {
    return this.http.delete(`${this.postsUrl}/${id}`);
  }
  createPost(userId: string, title: string, body: string) {
    const postData = new FormData();
    postData.append("userId", userId);
    postData.append("title", title);
    postData.append("body", body);
    return this.http.post(`${this.postsUrl}`,postData);
  }
  updatePost(id, userId, title, body) {
    const postData = new FormData();
    postData.append("userId", userId);
    postData.append("title", title);
    postData.append("body", body);
    return this.http.put(`${this.postsUrl}/${id}`, postData);
  }
}
