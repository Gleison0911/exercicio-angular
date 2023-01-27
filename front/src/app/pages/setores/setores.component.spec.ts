import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetoresComponent } from './setores.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchboxComponent } from '../../shared/searchbox/searchbox.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from 'src/app/shared/services/crud.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SetoresComponent', () => {
  let component: SetoresComponent;
  let fixture: ComponentFixture<SetoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        TableModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [SetoresComponent, SearchboxComponent],
      providers: [CrudService, MessageService, ConfirmationService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SetoresComponent);
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

  it('should showDialog', async () => {
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
