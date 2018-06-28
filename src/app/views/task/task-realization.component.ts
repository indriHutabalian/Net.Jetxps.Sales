import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngagementRunsheetItemService, EngagementStatusService, EngagementSellingTypeService, EngagementServiceTypeService, EngagementProductTypeService, DataService } from '../../services';
import { EngagementRunsheetItem, EngagementStatus, EngagementSellingType, EngagementServiceType, EngagementProductType } from '../../models';
import { ModalDirective } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-task-realization',
  templateUrl: './task-realization.component.html',
  styleUrls: ['./task-realization.component.scss']
})
export class TaskRealizationComponent implements OnInit, OnDestroy {
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;

  isModalShown: boolean = true;

  private engagementRunsheetCode: string;
  private prospectClientCode: string;
  private fileSizeLimit: number = 204800;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private toastrService: ToastrService,
    private engagementRunsheetItemService: EngagementRunsheetItemService,
    private engagementStatusService: EngagementStatusService,
    private engagementSellingTypeService: EngagementSellingTypeService,
    private engagementServiceTypeService: EngagementServiceTypeService,
    private engagementProductTypeService: EngagementProductTypeService,
  ) {
    let params = this.activatedRoute.snapshot.params;

    this.engagementRunsheetCode = params.code;
    this.prospectClientCode = params.prospectClientCode;
  }

  public engagementStatuses: EngagementStatus[];
  public engagementSellingTypes: EngagementSellingType[];
  public engagementProductTypes: EngagementProductType[];
  public engagementServiceTypes: EngagementServiceType[];

  public selectedEngagementStatus: EngagementStatus;
  public selectedEngagementSellingType: EngagementSellingType;
  public selectedEngagementServiceType: EngagementServiceType;
  public selectedEngagementProductType: EngagementProductType;

  public isOutletSellingType: boolean = false;

  public data: EngagementRunsheetItem;

  ngOnInit() {
    this.getEngagementStatuses();
    this.getEngagementSellingTypes();
    this.getEngagementProductTypes();
    this.getEngagementServiceTypes();

    this.getEngagementRunsheetItem(this.engagementRunsheetCode, this.prospectClientCode);
  }

  ngOnDestroy() {
  }

  save(data: EngagementRunsheetItem) {
    this.engagementRunsheetItemService.realization(data)
      .subscribe(res => {
        console.log(res);
        this.dataService.emitValue(data);
        this.toastrService.success(`Data has been saved!`);
        this.closeModal();
      }, res => {
        let error = res.error;

        this.toastrService.error(error.message);
      });
  }

  getEngagementRunsheetItem(engagementRunsheetCode: string, prospectClientCode: string) {
    this.engagementRunsheetItemService.get(engagementRunsheetCode, prospectClientCode)
      .subscribe(res => {
        this.data = res;
      });
  }

  closeModal() {
    // giring 
    this.router.navigate(['tasks/active']);
  }

  onHidden() {
    this.router.navigate(['tasks/active']);
  }

  convertMomToBase64(event) {
    let file = event.target.files[0];

    if (file) {
      let fr: FileReader = new FileReader();

      fr.onload = () => {
        if (file.size <= this.fileSizeLimit) {
          this.data.momFileName = file.name;
          this.data.mom = fr.result.split(',')[1];
        }
        else {
          this.data.momFileName = '';
          this.data.mom = '';
        }
      }, false;

      fr.readAsDataURL(file);
    }
  }

  convertImageToBase64(event) {
    let file = event.target.files[0];

    if (file) {
      let fr: FileReader = new FileReader();

      fr.onload = () => {
        if (file.size <= this.fileSizeLimit) {
          this.data.imageFileName = file.name;
          this.data.image = fr.result.split(',')[1];
        }
        else {
          this.data.imageFileName = '';
          this.data.image = '';
        }
      }, false;

      fr.readAsDataURL(file);
    }
  }

  getEngagementStatuses() {
    this.engagementStatusService.getAll({ size: -1 })
      .subscribe(res => {
        this.engagementStatuses = res.result;
      });
  }

  getEngagementSellingTypes() {
    this.engagementSellingTypeService.getAll({ size: -1 })
      .subscribe(res => {
        this.engagementSellingTypes = res.result;
      });
  }

  getEngagementProductTypes() {
    this.engagementProductTypeService.getAll({ size: -1 })
      .subscribe(res => {
        this.engagementProductTypes = res.result;
      });
  }

  getEngagementServiceTypes() {
    this.engagementServiceTypeService.getAll({ size: -1 })
      .subscribe(res => {
        this.engagementServiceTypes = res.result;
      });
  }
}
