import { Component, OnInit } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private mailService: MailService) {}

  ngOnInit(): void {
    this.mailService.$getMailForHomes.subscribe((mail) => {
      console.log('Recevied mail from :', mail);
    });
  }
}
