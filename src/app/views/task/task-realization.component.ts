import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngagementRunsheetItemService, EngagementStatusService, EngagementSellingTypeService, EngagementServiceTypeService, EngagementProductTypeService, DataService, ProspectClientService } from '../../services';
import { EngagementRunsheetItem, EngagementStatus, EngagementSellingType, EngagementServiceType, EngagementProductType, PageQuery } from '../../models';
import { ModalDirective, TabsetComponent } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Ng2ImgMaxService } from 'ng2-img-max';

import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-task-realization',
  templateUrl: './task-realization.component.html',
  styleUrls: ['./task-realization.component.scss']
})
export class TaskRealizationComponent implements OnInit, OnDestroy {

  @ViewChild('autoShownModal')
  autoShownModal: ModalDirective;

  @ViewChild('fileImage')
  fileImage: any;

  @ViewChild('fileMom')
  fileMom: any;

  @ViewChild('inputTabset')
  inputTabset: TabsetComponent;

  public isModalShown: boolean = true;

  private engagementRunsheetCode: string;
  private prospectClientCode: string;
  private fileSizeLimit: number = 256000;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private toastrService: ToastrService,
    private ng2ImgMaxService: Ng2ImgMaxService,
    private engagementRunsheetItemService: EngagementRunsheetItemService,
    private engagementStatusService: EngagementStatusService,
    private engagementSellingTypeService: EngagementSellingTypeService,
    private engagementServiceTypeService: EngagementServiceTypeService,
    private engagementProductTypeService: EngagementProductTypeService,
    private prospectClientService: ProspectClientService
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

  public loading: boolean = false;
  public loadingGetPreviousEngagementRunsheetItem: boolean = false;

  public isSellingTypeOutlet: boolean = false;

  public imagePreviewBase64: string;

  public data: EngagementRunsheetItem;
  public previousData: EngagementRunsheetItem;

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
    this.loading = true;
    data.realizationDate = new Date();
    this.engagementRunsheetItemService.realization(data)
      .subscribe(res => {
        this.loading = false;
        this.dataService.emitValue(data);
        this.toastrService.success(`Data has been saved!`);
        this.closeModal();
      }, res => {
        this.loading = false;
        let error = res.error;

        this.toastrService.error(error.message);
      });
  }

  getEngagementRunsheetItem(engagementRunsheetCode: string, prospectClientCode: string) {
    this.loading = true;
    this.engagementRunsheetItemService.get(engagementRunsheetCode, prospectClientCode)
      .subscribe(res => {
        this.loading = false;
        this.data = res;
      }, res => {
        this.loading = false;
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

    // if user press cancel
    if (!file) {
      this.removeMom();
      return;
    }

    let fr: FileReader = new FileReader();

    fr.onload = () => {
      if (file.size <= this.fileSizeLimit) {
        this.data.momFileName = file.name;
        this.data.mom = fr.result.split(',')[1];
      }
      else {
        this.toastrService.warning(`File should not exceed ${this.fileSizeLimit / 1024} KBs`);

        this.removeMom();
      }
    }, false;

    fr.readAsDataURL(file);

  }

  removeMom() {
    this.data.momFileName = '';
    this.data.mom = '';
    this.fileMom.nativeElement.value = ``;
  }

  onImageChange(event) {
    let image = event.target.files[0];

    if (!image) {
      this.removeImage();
      return;
    }

    this.ng2ImgMaxService.compressImage(image, 0.075)
      .subscribe(result => {

        let uploadedImage = new File([result], result.name);

        this.getImagePreview(uploadedImage);
      });
  }

  getImagePreview(file: File) {
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {

      this.data.imageFileName = file.name;
      this.data.image = reader.result.split(',')[1];

      this.imagePreviewBase64 = `data:image/png;base64,${this.data.image}`;
    };
  }

  removeImage() {
    this.data.image = ``;
    this.data.imageFileName = ``;
    this.imagePreviewBase64 = ``;

    this.fileImage.nativeElement.value = ``;
  }

  getPreviousEngagementRunsheetItem(prospectClientCode: string) {
    this.loadingGetPreviousEngagementRunsheetItem = true;
    let query = new PageQuery();
    query.asc = false;
    query.size = 1;
    debugger
    this.prospectClientService.getEngagementRunsheetItems(prospectClientCode, query)
      .subscribe(res => {
        this.loadingGetPreviousEngagementRunsheetItem = false;

        this.previousData = res.result[0];

      }, res => {
        this.loadingGetPreviousEngagementRunsheetItem = false;
        let error = res.error;
      });
  }

  copyFromPreviousData() {
    this.data.pic = this.previousData.pic;
    this.data.phone = this.previousData.phone;
    this.data.industryType = this.previousData.industryType;
    this.data.volume = this.previousData.volume;
    this.data.forecastAmount = this.previousData.forecastAmount;

    this.data.productTypeCode = this.previousData.productTypeCode;
    this.data.productTypeName = this.previousData.productTypeName;

    this.data.serviceTypeCode = this.previousData.serviceTypeCode;
    this.data.serviceTypeName = this.previousData.serviceTypeName;

    this.data.sellingTypeCode = this.previousData.sellingTypeCode;
    this.data.sellingTypeName = this.previousData.sellingTypeName;

    this.data.engagementStatusCode = this.previousData.engagementStatusCode;
    this.data.engagementStatusName = this.previousData.engagementStatusName;

    this.data.forecastClose = this.previousData.forecastClose;

    this.data.remarks = this.previousData.remarks;

    this.isSellingTypeOutlet = this.data.sellingTypeCode == 'OUTLET';

    this.inputTabset.tabs[0].active = true;

    this.toastrService.info(`Copied!`);
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
