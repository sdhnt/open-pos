import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SummaryGraphsPage } from './summary-graphs.page';

describe('SummaryGraphsPage', () => {
  let component: SummaryGraphsPage;
  let fixture: ComponentFixture<SummaryGraphsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryGraphsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryGraphsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
