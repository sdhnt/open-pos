import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransactionProductPage } from './transaction-product.page';

describe('TransactionProductPage', () => {
  let component: TransactionProductPage;
  let fixture: ComponentFixture<TransactionProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
