import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProductSignupPage } from './add-product-signup.page';

describe('AddProductSignupPage', () => {
  let component: AddProductSignupPage;
  let fixture: ComponentFixture<AddProductSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductSignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProductSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
