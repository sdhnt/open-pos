import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CashPopoverPage } from './cash-popover.page';

describe('CashPopoverPage', () => {
  let component: CashPopoverPage;
  let fixture: ComponentFixture<CashPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CashPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
