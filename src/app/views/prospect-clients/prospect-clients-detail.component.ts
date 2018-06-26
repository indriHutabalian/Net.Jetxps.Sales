import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ProspectClientService } from '../../services';
import { ProspectClient } from '../../models';

@Component({
  selector: 'app-prospect-clients-detail',
  templateUrl: './prospect-clients-detail.component.html',
  styleUrls: ['./prospect-clients-detail.component.scss']
})
export class ProspectClientsDetailComponent implements OnInit {
  constructor(
    private bsModalRef: BsModalRef,
    private prospectClientService: ProspectClientService
  ) { }

  @Input() code: string;
  public prospectClient: ProspectClient;

  ngOnInit() {
    if (!this.code)
      this.bsModalRef.hide();

    this.prospectClientService.get(this.code)
      .subscribe(data => {
        this.prospectClient = data;
      });
  }

  close() {
    this.bsModalRef.hide();
  }

}
