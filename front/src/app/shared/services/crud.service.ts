import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  public entity: string | undefined;
  private readonly url: string;

  constructor(
    private http: HttpClient,
    public messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {
    this.url = environment.apiUrl || '';
  }

  public get(search: string) {
    return this.http.get<any>(`${this.url}${this.entity}?q=${search}`);
  }

  public create(payload: any): Observable<any> {
    return this.http.post<any>(`${this.url}${this.entity}`, payload);
  }

  public findOne(id: number) {
    return this.http.get(`${this.url}${this.entity}` + '/' + id);
  }

  public update(payload: any) {
    return this.http.put(
      `${this.url}${this.entity}` + '/' + payload.id,
      payload
    );
  }

  public async delete(id: number | null | undefined) {
    if (!id) {
      return this.errorHandler('Erro ao inserinr registro.');
    }

    await new Promise((res,rej)=>{
      this.confirmationService.confirm({
        icon: 'pi pi-exclamation-triangle',
        message: 'Tem certeza que deseja excluir esse item? ',
        accept: () => {
          res(true);
        }
      });
    })

    let result = this.http.delete(`${this.url}${this.entity}` + '/' + id);
    this.messageService.add({
      key: 'toastCrud',
      severity: 'success',
      summary: '',
      detail: 'Dados excluidos com sucesso....',
    });
    return result.toPromise();
  }

  public async save(payload: any) {
    let result: any;
    let method: 'update' | 'create' = payload.id ? 'update' : 'create';
    try {
      result = await this[method](payload).toPromise();
    } catch (e) {
      this.errorHandler('Oops, ocorreu um erro....');
    }
    if (method === 'create') {
      this.messageService.add({
        key: 'toastCrud',
        severity: 'success',
        summary: '',
        detail: 'Item inserido com sucesso....',
      });
    } else {
      this.messageService.add({
        key: 'toastCrud',
        severity: 'warn',
        summary: 'Aviso!',
        detail: 'Você atualizou um item na base de dados.',
      });
    }
  }

  public errorHandler(msg: string) {
    this.messageService.add({
      key: 'toastCrud',
      severity: 'error',
      summary: '',
      detail: msg,
    });
  }
}
