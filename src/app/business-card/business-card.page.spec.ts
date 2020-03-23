import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BusinessCardPage } from './business-card.page';

describe('BusinessCardPage', () => {
  let component: BusinessCardPage;
  let fixture: ComponentFixture<BusinessCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
