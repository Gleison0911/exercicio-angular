import { Component } from '@angular/core';
import { Vara } from 'src/app/shared/models/vara';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/services/crud.service';
import { MessageService } from 'primeng/api';
import { Setor } from 'src/app/shared/models';

@Component({
  selector: 'app-setores',
  templateUrl: './setores.component.html',
  styleUrls: ['./setores.component.scss'],
})
export class SetoresComponent {
  public items: Setor[];
  public display: boolean = false;

  public formData = new FormGroup({
    id: new FormControl({ value: null, disabled: true }),
    nome: new FormControl('', Validators.required),
  });

  constructor(private api: CrudService, public messageService: MessageService) {
    this.api.entity = 'setores';
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
    } else {
      await this.api.save(this.formData.getRawValue());
      this.getAll('');
      this.display = false;
    }
  }

  public async edit(item: any) {
    let result: any = await this.api.findOne(item).toPromise();
    this.formData.setValue({
      id: result.id,
      nome: result.nome,
    });
  }

  public async delete(itemId: number) {
    await this.api.delete(itemId);
    this.getAll('');
  }

  showDialog() {
    this.display = true;
  }
}
