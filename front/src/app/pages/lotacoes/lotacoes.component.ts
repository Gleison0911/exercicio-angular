import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/shared/services/crud.service';
import { MessageService } from 'primeng/api';
import { Gabinete } from 'src/app/shared/models/gabinete';

@Component({
  selector: 'app-lotacoes',
  templateUrl: './lotacoes.component.html',
  styleUrls: ['./lotacoes.component.scss'],
})
export class LotacoesComponent {
  public items: Gabinete[];
  public display: boolean = false;

  public formData = new FormGroup({
    id: new FormControl({ value: null, disabled: true }),
    pessoas_id: new FormControl(null, Validators.required),
    gabinetes_id: new FormControl(null, Validators.required),
  });

  constructor(private api: CrudService, public messageService: MessageService) {
    this.api.entity = 'lotacoes';
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
      pessoas_id: result.pessoas_id,
      gabinetes_id: result.gabinetes_id,
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
