import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as _moment from 'moment';
import { default as _rollupMoment, Moment } from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-relatorio-financeiro-mensal',
  templateUrl: './relatorio-financeiro-mensal.component.html',
  styleUrls: ['./relatorio-financeiro-mensal.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  encapsulation: ViewEncapsulation.None,
})

export class RelatorioFinanceiroMensalComponent implements OnInit{
  date = new FormControl(moment());
  maxDate = moment();

  constructor(){}

  ngOnInit(): void {
    // Separates the date in day, month and year to make a formatted string
    var month = this.date.getRawValue()!.toDate().getMonth() + 1; //For some reason month goes from 0 to 11
    var year = this.date.getRawValue()!.toDate().getFullYear();

    // Handles the date so that dateString is always YYYY-MM
    if(month <= 9) var dateString = year + "-" + "0" + month;
    else var dateString = year + "-" + month;

    // Uses the aforementioned dateString to get the data for the view
    // this.getData(dateString);
  }

  setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }

  onDateChange(event: any){
    // Separates the date in day, month and year to make a formatted string
    var month = event.toDate().getMonth() + 1; //For some reason month goes from 0 to 11
    var year = event.toDate().getFullYear();

    // Handles the date so that dateString is always YYYY-MM
    if(month <= 9) var dateString = year + "-" + "0" + month;
    else var dateString = year + "-" + month;

    // Uses the aforementioned dateString to get the data for the view
    // this.getData(dateString);
  }
}