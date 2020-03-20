import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IncomeTransactionPage } from './income-transaction.page';

describe('IncomeTransactionPage', () => {
  let component: IncomeTransactionPage;
  let fixture: ComponentFixture<IncomeTransactionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeTransactionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeTransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
