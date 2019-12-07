import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { queryByTestId } from '@testing-library/dom';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ HomeComponent ],
      providers: [HttpClientModule]
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
    describe('Jasmine', () => {
      it('', () => {

      });
    });

    describe('Jest', () => {
      test.todo('reminder to do this test');
      // test.only('same as fit');
      test.skip('same as xit', () => {});
    });
  });

  describe('template', () => {
    describe('fixture.debugElement', () => {
      it('h1 tag should exist: fixture.debugElement', () => {
        const h1 = fixture.debugElement.query(By.css('h1'));

        expect(h1).toBeTruthy();
        expect(h1.nativeElement.textContent).toContain('@briebug');
      });
    });

    describe('@testing-library/dom', () => {
      const CONTAINER = document.body;

      test('h1 tag should exist', () => {
        const h1 = queryByTestId(CONTAINER, 'title');

        expect(h1).toBeTruthy();
        expect(h1.textContent).toContain('@briebug');
      });
    });
  });
});
