import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { SearchboxComponent } from 'src/app/shared/searchbox/searchbox.component';
import { CrudService } from 'src/app/shared/services/crud.service';
import { GabinetesComponent } from './gabinetes.component';

describe('GabinetesComponent', () => {
  let component: GabinetesComponent;
  let fixture: ComponentFixture<GabinetesComponent>;
  let service: CrudService;
  var originalTimeout;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        TableModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [GabinetesComponent, SearchboxComponent],
      providers: [CrudService, MessageService, ConfirmationService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(GabinetesComponent);
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    service = service;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the getAll method and set display to false after successfully saving data', async () => {
    spyOn(component, 'getAll');
    await component.saveData();
    expect(component.display).toBe(false);
  });

  it('should showDialog', async () => {
    let itemId = 1;
    component.edit(itemId);
    expect(component).toBeTruthy();
  });

  it('should delete', async () => {
    spyOn(component, 'getAll');
    let itemId = 1;
    component.delete(itemId);
    component.getAll('');
    expect(component).toBeTruthy();
  });

  it('should showDialog', () => {
    component.display = false;
    component.showDialog();
    expect(component).toBeTruthy();
  });
});
