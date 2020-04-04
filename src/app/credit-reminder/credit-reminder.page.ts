import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageProvider } from '../services/storage/storage';
import { Location } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-credit-reminder',
  templateUrl: './credit-reminder.page.html',
  styleUrls: ['./credit-reminder.page.scss'],
})
export class CreditReminderPage implements OnInit {
  @ViewChild('datePicker', { static: true }) datePicker;
  todayList = [];
  tomList = [];
  pendingList = [];
  dateSelected: any;
  contacts: any;
  filteredArray: any;
  constructor(private datePipe: DatePipe, public sp: StorageProvider, private location: Location, private router: Router) { }

  ionViewDidLeave() {
    this.contacts = [];
    this.dateSelected = null;
  }
  async ionViewDidEnter() {
    this.contacts = JSON.parse(await this.sp.getContacts());
    console.log('contacts==========', this.contacts)
  }
  async ngOnInit() {
    this.todayList = [];
    this.tomList = [];
    this.pendingList = [];
    this.contacts = JSON.parse(await this.sp.getContacts());
    const todayDate = new Date();
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

  async dateChanged() {
    this.contacts = JSON.parse(await this.sp.getContacts());
    const selectedDate = this.datePipe.transform(this.dateSelected, 'yyyy-MM-dd');

    this.contacts.forEach(contact => {
      console.log(contact)
      if (selectedDate == this.datePipe.transform(contact.updatedAt, 'yyyy-MM-dd')) {
        this.filteredArray.push(contact)
      }
    })

    this.contacts = this.filteredArray;
  }
}
