import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LoggingServiceService } from 'src/app/shared/services/logging-service.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  @Output() searchSubmit = new EventEmitter<string>();

  searchValue = '';
  constructor(private logService: LoggingServiceService) { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.searchValue);
    this.searchSubmit.emit(this.searchValue);
  }
}
