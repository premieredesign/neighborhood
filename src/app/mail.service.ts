import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  public $getMailForHomes: BehaviorSubject<any> = new BehaviorSubject('');
  private homes = [
    {
      220: {
        familyName: 'Johnsons',
      },
    },
    {
      453: {
        familyName: 'Howard',
      },
    },
    {
      777: {
        familyName: 'Bettermans',
      },
    },
    {
      935: {
        familyName: 'Henderson',
      },
    },
    {
      167: {
        familyName: 'Perryman',
      },
    },
  ];

  constructor() {
    this.getMailFor(167);
  }

  public getMailFor(address: any): any {
    // Look through each home -> this.homes.map
    // For each home that you are looking at -> (home:any) =>
    this.homes.map((home: any) => {
      if (home[address]) {
        this.$getMailForHomes.next(home);
      }
    });
  }
}
