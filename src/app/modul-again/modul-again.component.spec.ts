import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulAgainComponent } from './modul-again.component';

describe('ModulAgainComponent', () => {
  let component: ModulAgainComponent;
  let fixture: ComponentFixture<ModulAgainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulAgainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulAgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
