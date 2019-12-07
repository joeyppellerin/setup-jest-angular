import { UnAutreComponentComponent } from './../un-autre-component/un-autre-component.component';
import { ApiMockService } from './../../services/api/api.mock.service';
import { GenderEnum } from 'src/app/models/gender.enum';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { queryByTestId } from '@testing-library/dom';
import { By } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api/api.service';
import { of } from 'rxjs';
import { Reponse } from 'src/app/models/reponse';
import { Result } from 'src/app/models/result';
import { Name } from 'src/app/models/name';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockComponent } from 'mock-component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let api: ApiMockService;

  let response: Reponse;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ HomeComponent, MockComponent(UnAutreComponentComponent) ],
      providers: [{provide: ApiService, useClass: ApiMockService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    api = TestBed.get(ApiService);
    response = createResponse();
    api.response = response;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('component', () => {
    describe('Jasmine', () => {
      it('when ngOnInit() is called, shound call getData()', () => {
        const getData = spyOn((component as any), 'getData');

        component.ngOnInit();

        expect(getData).toHaveBeenCalled();
      });

      it('when calling api, should get a name', () => {
        component.ngOnInit();

        expect(component.name).toBeTruthy();
        expect(component.name).toEqual('Méo Panché');
      });

      it('when name is male, variable isMale should be true', () => {
        component.ngOnInit();

        expect(component.isMale).toBeTruthy();
      });

      it('when gender is female, variable isMale should be false', () => {
        api.response.results[0].gender = GenderEnum.FEMALE;
        api.response = response;
        component.ngOnInit();

        expect(component.isMale).toBeFalsy();
      });
    });

    describe('Jest', () => {
      test.todo('reminder to do this test');
      // test.only('same as fit', () => {});
      test.skip('same as xit', () => {});

      test('when ngOnInit() is called, shound call getData()', () => {
        const getData = jest.spyOn((component as any), 'getData');

        component.ngOnInit();

        expect(getData).toHaveBeenCalled();
      });

      test('when calling api, should get a name', () => {
        component.ngOnInit();

        expect(component.name).toBeTruthy();
        expect(component.name).toEqual('Méo Panché');
      });

      test('when calling api, should get a name', () => {
        component.ngOnInit();

        expect(component.name).toBeTruthy();
        expect(component.name).toEqual('Méo Panché');
      });

      test('when gender is male, variable isMale should be true', () => {
        component.ngOnInit();

        expect(component.isMale).toBeTruthy();
      });

      test('when gender is female, variable isMale should be false', () => {
        api.response.results[0].gender = GenderEnum.FEMALE;
        component.ngOnInit();

        expect(component.isMale).toBeFalsy();
      });
    });
  });

  describe('template', () => {
    describe('fixture.debugElement', () => {
      it('h1 tag should exist: fixture.debugElement', () => {
        const h1 = fixture.debugElement.query(By.css('h1'));

        expect(h1).toBeTruthy();
        expect(h1.nativeElement.textContent).toContain('@briebug');
      });

      it('when a name is being received from api, should display the name', () => {
        // cible tous les balises p contenu dans un parent ayant pour classe .class
        const name = fixture.debugElement.queryAll(By.css('.class > p'));

        expect(name.length).toEqual(4); // reçoit 4 car une autre div contient un p a une class="class"
        expect(name[1].nativeElement).toBeTruthy();
        expect(name[1].nativeElement.textContent).toEqual('Méo Panché');
      });

      it('when a name is not received from api, should not display the name', () => {
        component.name = null;
        fixture.detectChanges();
         //cible directement le bon div, par contre prend deux lignes
        const divClass = fixture.debugElement.queryAll(By.css('.class'));
        const name = divClass[1].queryAll(By.css('p'));

        expect(name.length).toEqual(2);
        expect(name[1].nativeElement.textContent).not.toEqual('Méo Panché'); //Tester indirectement si le nom n'est pas affiché
      });
    });

    describe('@testing-library/dom', () => {
      const CONTAINER = document.body;

      test('h1 tag should exist', () => {
        const h1 = queryByTestId(CONTAINER, 'title');

        expect(h1).toBeTruthy();
        expect(h1.textContent).toContain('@briebug');
      });

      test('when a name is being received from api, should display the name', () => {
        // ciblage de la bonne balise précise et résiliant au changement
        const name = queryByTestId(CONTAINER, 'name');

        expect(name).toBeTruthy();
        expect(name.textContent).toEqual('Méo Panché');
      });

      test('when a name is not received from api, should not display the name', () => {
        component.name = null;
        fixture.detectChanges();
        const name = queryByTestId(CONTAINER, 'name');

        expect(Boolean(name)).toBeFalsy();
      });
    });
  });
});

function createResponse() {
  const response = new Reponse();
  response.results = [new Result()];
  response.results[0].gender = GenderEnum.MALE;
  response.results[0].name = new Name();
  response.results[0].name.first = 'Méo';
  response.results[0].name.last = 'Panché';
  response.results[0].name.title = 'Mr';

  return response;
}
