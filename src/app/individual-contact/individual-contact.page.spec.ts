import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndividualContactPage } from './individual-contact.page';

describe('IndividualContactPage', () => {
  let component: IndividualContactPage;
  let fixture: ComponentFixture<IndividualContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
