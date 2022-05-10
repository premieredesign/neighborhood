import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent implements OnInit {
  constructor(private mailService: MailService) {}

  ngOnInit(): void {
    this.mailService.$getMailForHomes.next(
      'Here is our new magazine from HGTV'
    );
  }
}
