import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextProviderComponent } from './text-provider.component';

describe('TextProviderComponent', () => {
  let component: TextProviderComponent;
  let fixture: ComponentFixture<TextProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
