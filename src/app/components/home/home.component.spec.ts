/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('component', () => {
    it('jasmine', () => {
      spyOn(component, 'method').and.returnValue(true);

      expect(component.method()).toBeTruthy();
    });
  });

  describe('template', () => {
    it('h1 tag should exist', () => {
      const h1 = fixture.debugElement.query(By.css('h1'));

      expect(h1).toBeTruthy();
      expect(h1.nativeElement.textContent).toContain('Angular');
    });
  });
});
