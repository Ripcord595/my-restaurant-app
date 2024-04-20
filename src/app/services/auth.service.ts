import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // 设置后端API的URL
  private loginUrl = 'http://your-backend-api.com/login';

  constructor(private http: HttpClient) {}

  // 登录方法
  login(username: string, password: string): Observable<any> {
    // 构造请求体
    const body = { username: username, password: password };
    // 发送POST请求到登录URL
    return this.http.post<any>(this.loginUrl, body).pipe(
      catchError(this.handleError)
    );
  }

  // 错误处理方法
  private handleError(error: any) {
    // 可以对不同的HTTP错误进行不同的处理
    // 这里我们仅打印到控制台并返回一个错误Observable
    console.error('An error occurred:', error.error);
    return throwError(error);
  }
}
