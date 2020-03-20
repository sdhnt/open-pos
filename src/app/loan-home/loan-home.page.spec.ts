import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanHomePage } from './loan-home.page';

describe('LoanHomePage', () => {
  let component: LoanHomePage;
  let fixture: ComponentFixture<LoanHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
