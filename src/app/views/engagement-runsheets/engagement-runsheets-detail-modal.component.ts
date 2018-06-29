import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { EngagementStatusService, EngagementRunsheetService } from '../../services';
import { EngagementRunsheet } from '../../models';

@Component({
  selector: 'app-engagement-runsheets-detail-modal',
  templateUrl: './engagement-runsheets-detail-modal.component.html',
  styleUrls: ['./engagement-runsheets-detail-modal.component.scss']
})
export class EngagementRunsheetsDetailModalComponent implements OnInit {
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;

  public isModalShown: boolean = true;
  private engagementRunsheetCode: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private engagementRunsheetService: EngagementRunsheetService,
  ) {
    let params = this.activatedRoute.snapshot.params;
    this.engagementRunsheetCode = params.code;
  }
  public loading: boolean = false;

  public data: EngagementRunsheet;

  ngOnInit() {
    this.getEngagementRunsheet(this.engagementRunsheetCode);
  }

  getEngagementRunsheet(code: string) {
    this.loading = true;

    this.engagementRunsheetService.get(code)
      .subscribe(res => {
        this.loading = false;

        this.data = res;
      }, res => {
        this.loading = false;

        let error = res.error;
      });
  }

  closeModal() {
    // giring 
    this.router.navigate(['engagement-runsheets']);
  }

  onHidden() {
    this.router.navigate(['engagement-runsheets']);
  }
}
