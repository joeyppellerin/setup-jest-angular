/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { queryByTestId } from '@testing-library/dom';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const CONTAINER = document.body;

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

  it('h1 tag should exist: data-testid tag', () => {
    const h1 = queryByTestId(CONTAINER, 'ok');

    expect(h1).toBeTruthy();
    expect(h1.textContent).toContain('@briebug');
  });

  it('h1 tag should exist: fixture.debugElement', () => {
    const h1 = fixture.debugElement.query(By.css('h1');

    expect(h1).toBeTruthy();
    expect(h1.nativeElement.textContent).toContain('@briebug');
  });
});
