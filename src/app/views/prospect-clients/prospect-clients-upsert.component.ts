import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ProspectClientService } from '../../services';
import { ProspectClient } from '../../models';

@Component({
  selector: 'app-prospect-clients-upsert',
  templateUrl: './prospect-clients-upsert.component.html',
  styleUrls: ['./prospect-clients-upsert.component.scss']
})
export class ProspectClientsUpsertComponent implements OnInit {
  constructor(
    private bsModalRef: BsModalRef,
    private bsModalService: BsModalService,
    private prospectClientService: ProspectClientService
  ) { }

  @Input() code: string;
  private data: ProspectClient = new ProspectClient();

  ngOnInit() {
    if (this.code)
      this.prospectClientService.get(this.code)
        .subscribe(data => {
          this.data = data;
        });
  }

  close() {
    this.bsModalService.setDismissReason('reload');
    this.bsModalRef.hide();
  }

  save(data) {
    if (data.code) {

    }
    else {
      
    }
  }
}
