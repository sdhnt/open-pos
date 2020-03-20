import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransactionHomePage } from './transaction-home.page';

describe('TransactionHomePage', () => {
  let component: TransactionHomePage;
  let fixture: ComponentFixture<TransactionHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
