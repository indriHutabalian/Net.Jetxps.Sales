import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { ReportService } from '../../services';
import { ToastrService } from 'ngx-toastr';
import { EngagementRunsheetItem } from '../../models';

@Component({
  selector: 'app-report-sales-engagement-detail-modal',
  templateUrl: './report-sales-engagement-detail-modal.component.html',
  styleUrls: ['./report-sales-engagement-detail-modal.component.scss']
})
export class ReportSalesEngagementDetailModalComponent implements OnInit {
  @Input() salesEmail: string;
  @Input() startDate: Date;
  @Input() endDate: Date;
  @Input() isPOE: boolean;

  public loading: boolean = false;
  public items: EngagementRunsheetItem[] = [];

  constructor(
    private bsModalRef: BsModalRef,
    private toastrService: ToastrService,
    private reportService: ReportService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.reportService.getSalesEngagementDetail({
      salesEmail: this.salesEmail,
      startDate: this.startDate,
      endDate: this.endDate
    }, this.isPOE)
      .subscribe(res => {
        this.loading = false;

        this.items = res.result;
      }, res => {
        this.loading = false;
        let error = res.error;

        this.toastrService.error(error.message);
      });

  }

  closeModal() {
    this.bsModalRef.hide();
  }

}
