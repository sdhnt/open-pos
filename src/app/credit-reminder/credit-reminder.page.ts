import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageProvider } from '../services/storage/storage';
import { Location } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';
import { DatePipe } from '@angular/common';
import { borderTopRightRadius } from 'html2canvas/dist/types/css/property-descriptors/border-radius';
import { EventService } from '../services/event.service';

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
  dateSelected = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  contacts = [];
  filteredArray = [];
  today = new Date();
  constructor(public events: EventService,private datePipe: DatePipe, public sp: StorageProvider, private location: Location, private router: Router) { }

  ionViewDidLeave() {
    this.events.emitIsBack(false);
    this.events.emitBackRoute('')
    this.contacts = [];
    this.dateSelected = null;
  }
  async ionViewDidEnter() {
    this.events.emitIsBack(true);
    this.events.emitBackRoute('home/contacts')
    this.contacts = JSON.parse(await this.sp.getContacts());
    console.log('contacts==========', this.contacts);
    this.dateSelected = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.dateChanged();
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
    this.filteredArray = this.contacts.filter(contact => {
      console.log(contact, selectedDate, selectedDate === this.datePipe.transform(contact.dueDate, 'yyyy-MM-dd'), this.datePipe.transform(contact.dueDate, 'yyyy-MM-dd'));
      return selectedDate === this.datePipe.transform(contact.dueDate, 'yyyy-MM-dd');
    });
    // this.contacts = this.filteredArray;
  }
}
