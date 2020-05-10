import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, observable } from "rxjs";
import { catchError } from 'rxjs/operators';;
// import { tap } from 'rxjs/operator'
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  // createBlog(blogdata: { title: any; description: any; blogBody: any; category: any; }) {
  //   throw new Error("Method not implemented.");
  // }
  // createBlog(blogdata: { title: any; description: any; blogBody: any; category: any; }) {
  //   throw new Error("Method not implemented.");
  // }
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';


  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    return Observable.throw(err.message);

  }

  public getAllblogs(): any {
    let myResponse = this._http.get(this.baseUrl + '/all?authToken=YTI1NmM1MjE1MzUwODlhYjljYmRmMzRlMTI1M2RiOTA3OGNjYWVlOGE5MzQxNmUyMzAzNzMzMTkyMmU3ZTllNTY5MWRlZWU1MTJiMzdjZTJiMjVmMWNmMjgwODU3MDQzNWZkNTdjNGI2YWU0NTNhZDEzNGFkNDE5N2I3NTdmNzE5OA==')
    console.log(myResponse)
    return myResponse;

  }

  public getblogId(myBlogId): any {

    return this._http.get(this.baseUrl + '/view/' + myBlogId + '?authToken=YTI1NmM1MjE1MzUwODlhYjljYmRmMzRlMTI1M2RiOTA3OGNjYWVlOGE5MzQxNmUyMzAzNzMzMTkyMmU3ZTllNTY5MWRlZWU1MTJiMzdjZTJiMjVmMWNmMjgwODU3MDQzNWZkNTdjNGI2YWU0NTNhZDEzNGFkNDE5N2I3NTdmNzE5OA==')
  }

  public createBlog(blogdata): any {
    return this._http.post(this.baseUrl + '/create' + '?authToken=YTI1NmM1MjE1MzUwODlhYjljYmRmMzRlMTI1M2RiOTA3OGNjYWVlOGE5MzQxNmUyMzAzNzMzMTkyMmU3ZTllNTY5MWRlZWU1MTJiMzdjZTJiMjVmMWNmMjgwODU3MDQzNWZkNTdjNGI2YWU0NTNhZDEzNGFkNDE5N2I3NTdmNzE5OA==', blogdata)
  }

  public editBlog(myBlogId, blog): any {
    return this._http.put(this.baseUrl + '/' + myBlogId + '/edit' + '?authToken=YTI1NmM1MjE1MzUwODlhYjljYmRmMzRlMTI1M2RiOTA3OGNjYWVlOGE5MzQxNmUyMzAzNzMzMTkyMmU3ZTllNTY5MWRlZWU1MTJiMzdjZTJiMjVmMWNmMjgwODU3MDQzNWZkNTdjNGI2YWU0NTNhZDEzNGFkNDE5N2I3NTdmNzE5OA==', blog)
  }

  public deleteBlog(myBlogId): any {

    return this._http.post(this.baseUrl +'/'+ myBlogId +'/delete?authToken=YTI1NmM1MjE1MzUwODlhYjljYmRmMzRlMTI1M2RiOTA3OGNjYWVlOGE5MzQxNmUyMzAzNzMzMTkyMmU3ZTllNTY5MWRlZWU1MTJiMzdjZTJiMjVmMWNmMjgwODU3MDQzNWZkNTdjNGI2YWU0NTNhZDEzNGFkNDE5N2I3NTdmNzE5OA==',null )
  }

}

