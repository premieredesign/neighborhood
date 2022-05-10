import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Step 1: Create Observable
  public $heySiri: BehaviorSubject<any> = new BehaviorSubject('');
  constructor(private http: HttpClient) {
    // Step 2: Use Observable -> .next
    this.$heySiri.next('Hey Siri');
  }

  public getData(): Observable<any> {
    return this.http.get(
      'https://itunes.apple.com/search?term=marvin+sapp&limit=1'
    );
  }
}
