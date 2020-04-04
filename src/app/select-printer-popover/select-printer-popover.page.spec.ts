import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectPrinterPopoverPage } from './select-printer-popover.page';

describe('SelectPrinterPopoverPage', () => {
  let component: SelectPrinterPopoverPage;
  let fixture: ComponentFixture<SelectPrinterPopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPrinterPopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectPrinterPopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
