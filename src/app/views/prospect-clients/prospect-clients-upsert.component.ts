import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ProspectClientService, BranchService } from '../../services';
import { ProspectClient, Branch, PageQuery } from '../../models';

@Component({
  selector: 'app-prospect-clients-upsert',
  templateUrl: './prospect-clients-upsert.component.html',
  styleUrls: ['./prospect-clients-upsert.component.scss']
})
export class ProspectClientsUpsertComponent implements OnInit {
  constructor(
    private bsModalRef: BsModalRef,
    private bsModalService: BsModalService,
    private prospectClientService: ProspectClientService,
    private branchService: BranchService
  ) { }

  @Input() code: string;
  private data: ProspectClient = new ProspectClient();
  private branches: Branch[];
  private errors;

  ngOnInit() {
    this.getBanks();

    if (this.code)
      this.prospectClientService.get(this.code)
        .subscribe(data => {
          this.data = data;
        });
  }

  getBanks() {
    this.branchService.getAll({ size: -1, orderBy: 'Name' })
      .subscribe(data => {
        this.branches = data.result;
      });
  }

  close() {
    this.bsModalService.setDismissReason('reload');
    this.bsModalRef.hide();
  }

  save(data) {
    let save$ = (data.id) ?
      this.prospectClientService.update(data.code, data)
      : this.prospectClientService.create(data);

    save$.subscribe(res => {
      this.close();
    }, res => {
      let error = res.error;

      this.errors = error.errors;
    });
  }

  getErrorValue(propName: string) {
    if (!this.errors)
    return '';

    return this.errors[propName];
  }
}