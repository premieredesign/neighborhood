import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstagramService {
  public $notification: BehaviorSubject<any> = new BehaviorSubject('');

  constructor() {}
}
