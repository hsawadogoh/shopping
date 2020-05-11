import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PannierPage } from './pannier.page';

describe('PannierPage', () => {
  let component: PannierPage;
  let fixture: ComponentFixture<PannierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PannierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PannierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
