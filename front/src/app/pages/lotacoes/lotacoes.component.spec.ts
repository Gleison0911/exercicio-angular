import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { SearchboxComponent } from 'src/app/shared/searchbox/searchbox.component';
import { CrudService } from 'src/app/shared/services/crud.service';

import { LotacoesComponent } from './lotacoes.component';

describe('LotacoesComponent', () => {
  let component: LotacoesComponent;
  let fixture: ComponentFixture<LotacoesComponent>;

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
      declarations: [LotacoesComponent, SearchboxComponent],
      providers: [CrudService, MessageService],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LotacoesComponent);
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
