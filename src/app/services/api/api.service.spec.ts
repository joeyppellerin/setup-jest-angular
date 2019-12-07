import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Api', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });

  describe('getName', () => {
    describe('Jasmine', () => {
      it('should build the url correctly', () => {
        service.getName().subscribe(reponse => expect(reponse).toBeTruthy());

        httpMock.expectOne({
          url: 'https://randomuser.me/api/',
          method: 'GET'
        }).flush({ response: true});
      });

      it('should return data from service', () => {
        const DATA = { results: [{ gender: 'horse', name: { first: 'John', last: 'Doe', title: 'Mr'}}]};
        service.getName().subscribe(reponse => expect(reponse).toBe(DATA));

        httpMock.expectOne({
          url: 'https://randomuser.me/api/',
          method: 'GET'
        }).flush(DATA, { status: 200, statusText: 'OK' });
      });

      it('should return an error', () => {
        service.getName().subscribe(error => expect(error).toBeTruthy());

        httpMock.expectOne({
          url: 'https://randomuser.me/api/',
          method: 'GET'
        }).flush({ status: 403, statusText: 'Bad Request'});
      });
    });

    describe('Jest', () => {
      // Same as Jasmine
    });
  });
});
