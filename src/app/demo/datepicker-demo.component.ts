import { Component,Injectable, OnInit } from '@angular/core';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';

import {DatepickerI18n,DatepickerI18nType} from '../shared/datepickerI18n/datepickerI18n';

import { AppService } from '../app.service';


@Component({
  selector: 'c-datepicker-demo',
  template: `
    <div class="c-content-inner">
       <div class="row">
          <div  class="col-md-12">
              <p class="c-line-title">示例</p>
              <div  class="col-md-6">
                <div class="input-group">
                  <input class="form-control" placeholder="yyyy-mm-dd" name="dp" [(ngModel)]="model" ngbDatepicker #d="ngbDatepicker">
                  <div class="input-group-addon c-cursor-pointer" (click)="d.toggle()" >
                      <i class="fa fa-calendar"></i>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="row">
          <div  class="col-md-12">
            <div class="c-mt15">
              <p class="c-line-title">说明</p>
               第三方组件：ng-bootstrap，还有其它ng-bootstrap组件可参考https://ng-bootstrap.github.io/#/home
             </div>
           </div>
        </div>
    </div>
  `,
  providers: [DatepickerI18nType, {provide: NgbDatepickerI18n, useClass: DatepickerI18n}]
})
export class DatepickerDemoComponent {
  model;

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit("日期选择");
  }

  
}