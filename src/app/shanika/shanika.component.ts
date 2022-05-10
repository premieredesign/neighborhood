import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../instagram.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-shanika',
  templateUrl: './shanika.component.html',
  styleUrls: ['./shanika.component.scss'],
})
export class ShanikaComponent implements OnInit {
  constructor(
    private instagram: InstagramService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.instagram.$notification.next(
      'Hey Fans, We are getting ready to launch June 1st'
    );

    this.userService.getData().subscribe((data) => {
      console.log('Response from Apple', data);
    });
  }
}
