import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: Api', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiService]
    });

    service = TestBed.get(ApiService);
  });

  it('should create service', () => {
    expect(service).toBeTruthy();
  });
});
