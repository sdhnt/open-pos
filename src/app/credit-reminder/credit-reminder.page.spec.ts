import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreditReminderPage } from './credit-reminder.page';

describe('CreditReminderPage', () => {
  let component: CreditReminderPage;
  let fixture: ComponentFixture<CreditReminderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditReminderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditReminderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
