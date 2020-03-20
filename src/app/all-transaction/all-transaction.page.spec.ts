import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllTransactionPage } from './all-transaction.page';

describe('AllTransactionPage', () => {
  let component: AllTransactionPage;
  let fixture: ComponentFixture<AllTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
