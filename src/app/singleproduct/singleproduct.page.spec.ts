import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleproductPage } from './singleproduct.page';

describe('SingleproductPage', () => {
  let component: SingleproductPage;
  let fixture: ComponentFixture<SingleproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleproductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
