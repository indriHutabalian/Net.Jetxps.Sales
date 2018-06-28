import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  private subject: BehaviorSubject<any> = new BehaviorSubject(null);

  public subject$ = this.subject.asObservable();

  constructor() { }

  emitValue(data: any) {
    this.subject.next(data);
  }

}