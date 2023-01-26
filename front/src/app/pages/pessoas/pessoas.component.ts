import { Component } from '@angular/core';
import { Pessoa } from 'src/app/shared/models/pessoa';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/services/crud.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss'],
})
export class PessoasComponent {
  public items: Pessoa[];
  public display: boolean = false;

  public formData = new FormGroup({
    id: new FormControl({ value: null, disabled: true }),
    nome: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    perfis_id: new FormControl(null, Validators.required),
  });

  constructor(
    private api: CrudService,
    public messageService: MessageService
  ) {
    this.api.entity = 'pessoas';
    this.items = [];
  }

  public ngOnInit() {
    this.getAll('');
  }

  public async getAll(search: string) {
    this.items = await this.api.get(search).toPromise();
  }

  public async saveData() {
    if (!this.formData.valid) {
      this.api.errorHandler('Entre com dados validos...');
    }else{
      await this.api.save(this.formData.getRawValue())
      this.getAll('');
      this.display = false;
    }

  }

  public async edit(item: any) {
    let result:any = await this.api.findOne(item).toPromise()
    this.formData.setValue({
      id: result.id,
      nome: result.nome,
      senha: result.senha,
      perfis_id: result.perfis_id,
    });
  }

  public async delete(itemId:number) {
    await this.api.delete(itemId).toPromise();
    this.getAll('');
  }

  showDialog() {
    this.display = true;
  }
}
