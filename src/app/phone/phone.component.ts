import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Step 3: Listen to Observable -> .subscribe
    this.userService.$heySiri.subscribe((msg) => {
      console.log(msg);
    });
  }
}
