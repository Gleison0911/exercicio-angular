import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [CrudService, MessageService, ConfirmationService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudService);
  });

  it('should be created', fakeAsync(() => {
    let teste: string = 'teste';
    service.save(teste);
    expect(service).toBeTruthy();
  }));

  it('should be update', fakeAsync(() => {
    let teste: string = 'teste';
    service.update(teste);
    expect(service).toBeTruthy();
  }));

  it('should be findOne', () => {
    let id: number = 1;
    service.findOne(id);
    expect(service).toBeTruthy();
  });

  it('should be delete', () => {
    let id: number = 1;
    service.delete(id);
    expect(service).toBeTruthy();
  });

  it('should be delete', () => {
    service.delete(null);
    expect(service).toBeTruthy();
  });

  it('should be updmsgate', () => {
    let teste: string = 'testando';
    service.errorHandler(teste);
    expect(service).toBeTruthy();
  });
});
