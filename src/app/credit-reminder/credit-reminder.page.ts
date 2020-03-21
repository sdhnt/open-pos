import { Component, OnInit } from '@angular/core';
import { StorageProvider } from '../services/storage/storage';
import { Location } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-credit-reminder',
  templateUrl: './credit-reminder.page.html',
  styleUrls: ['./credit-reminder.page.scss'],
})
export class CreditReminderPage implements OnInit {
  todayList = [];
  tomList = [];
  pendingList = [];

  constructor(public sp: StorageProvider, private location: Location, private router: Router) { }

  async ngOnInit() {
    this.todayList = [];
    this.tomList = [];
    this.pendingList = [];
    const contacts = JSON.parse(await this.sp.getContacts());
    const todayDate = new Date();
    contacts.forEach(contact => {
      if (contact.dueDate && contact.dueDate !== '' && contact.balance !== 0) {
        const contactDate = new Date(contact.dueDate);
        console.log(contactDate.valueOf() - todayDate.valueOf());
        if (contactDate.getFullYear() === todayDate.getFullYear()) {
          if (contactDate.getMonth() === todayDate.getMonth()) {
            if (contactDate.getDate() === todayDate.getDate()) {
              this.todayList.push(contact);
            } else if (contactDate.getDate() === todayDate.getDate() + 1) {
              this.tomList.push(contact);
            }
          } else if (todayDate.getMonth() === contactDate.getMonth() - 1) {
            if (contactDate.valueOf() - todayDate.valueOf() < 86400000) {
              // 8.64e7 is one day in milliseconds
              this.tomList.push(contact);
            }
          }
        }
        if (contactDate.valueOf() - todayDate.valueOf() < 0) {
          if (
            contactDate.getDate() !== todayDate.getDate() ||
            contactDate.getMonth() !== todayDate.getMonth() ||
            contactDate.getFullYear() !== todayDate.getFullYear()
          ) {
            this.pendingList.push(contact);
          }
        }
      }
    });
  }


  async ionViewWillEnter() {
  }

  navToIndividual(contact) {
    const naviExtra: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(contact)
      }
    };
    this.router.navigate(['/home/individual-contact'], naviExtra);
  }

  goBack() {
    this.location.back();
  }
}
