import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../instagram.service';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.scss'],
})
export class FansComponent implements OnInit {
  constructor(private instagram: InstagramService) {}

  ngOnInit(): void {
    this.instagram.$notification.subscribe((messageFromShanika) => {
      console.log('Message from Shanika:', messageFromShanika);
    });
  }
}
