import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { DailyConsumptionData } from '../../interfaces/daily-consumption-data';

@Component({
  selector: 'app-relatorio-de-consumo-diario',
  templateUrl: './relatorio-de-consumo-diario.component.html',
  styleUrls: ['./relatorio-de-consumo-diario.component.scss']
})
export class RelatorioDeConsumoDiarioComponent implements OnInit {
  data: DailyConsumptionData | null = null;
  loading: boolean = true;
  date: FormControl<Date|null> = new FormControl<Date>(new Date()); // Initializes date with today's date
  maxDate: Date = new Date();

  constructor(private dataService: DataService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.onDateSelect();
    this.updateSizes();
  }

  // Listens to the resizing of the window
  @HostListener('window:resize')
  onResize(): void {
    this.updateSizes();
  }

  // Updates the size of elements for responsiveness
  updateSizes(): void {
    // Updates title and date picker
    const titleContainer = document.getElementById('titleContainer');
    const datePicker = document.getElementById('datePicker');
    const consumptionTitleContainer = document.getElementById('consumptionTitleContainer');
    if (titleContainer && datePicker && consumptionTitleContainer) {
      // Checks if the title container's width is less than or equal to 600px
      if (titleContainer.clientWidth <= 600) {
        datePicker.style.width = '100%';
        consumptionTitleContainer.style.justifyContent = 'space-between';
      } 
      else {
        datePicker.style.removeProperty('width');
        consumptionTitleContainer.style.justifyContent = 'flex-start';
      }
    }
    // Updates charts
    setTimeout(() => { // Uses setTimeout to wait for the view to resize
      const consumo_acumulado = document.getElementById('chartConsumoAcumulado');
      const curva_carga = document.getElementById('chartCurvaDeCarga');
      if (consumo_acumulado && curva_carga) {
        // Calls executeScripts for each chart to make them resize
        this.executeScripts(consumo_acumulado);
        this.executeScripts(curva_carga);
      }
    }, 250);
  }
  
  // Updates data with the selected date
  onDateSelect(): void {
    const dateRawValue = this.date.getRawValue();
    if (dateRawValue) {
      // Separates the date in day, month and year to make a formatted YYYY-MM-DD string
      const day = dateRawValue.getDate();
      const month = dateRawValue.getMonth() + 1; // For some reason month goes from 0 to 11
      const year = dateRawValue.getFullYear();
      const dateString = this.formatDateString(year, month, day);
      this.getData(dateString); // Uses the aforementioned dateString to get the data for the view
    }
  }

  // Handles the date so that dateString is always YYYY-MM-DD
  formatDateString(year: number, month: number, day: number): string {
    const pad = (n: number) => (n < 10 ? '0' + n : n.toString()); // Adds a 0 before the number if n is < 10
    return `${year}-${pad(month)}-${pad(day)}`;
  }
    
  // Gets the data for the view using the dataService
  getData(dateString: string): void {
    this.loading = true;
    this.dataService.getDailyConsumptionData(dateString).subscribe({
      next: (response) => {
        this.data = response;
        this.loading = false;
        setTimeout(() => { // Uses setTimeout to wait for the view to render
          const consumo_acumulado = document.getElementById('chartConsumoAcumulado');
          const curva_carga = document.getElementById('chartCurvaDeCarga');
          if (this.data && consumo_acumulado && curva_carga) {
            // Sets the chart's html and calls executeScripts for each element
            consumo_acumulado.innerHTML = this.data['consumo-acumulado'];
            this.executeScripts(consumo_acumulado);
            curva_carga.innerHTML = this.data['curva-de-carga'];
            this.executeScripts(curva_carga);
          }
        }, 0);
      },
      error: () => {
        this.data = null;
        this.loading = false;
      }
    });
  }

  // Executes the chart's scripts
  executeScripts(element: HTMLElement): void {
    // Gets all script elements within the provided HTMLElement
    const scriptTags = element.getElementsByTagName('script');
    // Loops through each script element
    for (let i = 0; i < scriptTags.length; i++) {
      // Gets the content of the current script element
      const scriptContent = scriptTags[i].textContent;
      if (scriptContent) {
        const scriptFunction = new Function(scriptContent); // Creates a new function from the script content
        scriptFunction(); // Executes the newly created script function
      }
    }
  }
}