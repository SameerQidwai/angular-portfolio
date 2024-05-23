import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertErrorSubject = new Subject<string>();
  private alertSuccessSubject = new Subject<string>();

  constructor() { }

  getErrorAlerts() {
    return this.alertErrorSubject.asObservable();
  }

  showErrorAlert(message: string) {
    this.alertErrorSubject.next(message);
  }

  getSuccessAlerts() {
    return this.alertSuccessSubject.asObservable();
  }

  showSuccessAlert(message: string) {
    this.alertSuccessSubject.next(message);
  }

}
