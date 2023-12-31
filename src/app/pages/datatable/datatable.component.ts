import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DatatableDataSource, DatatableItem, EXAMPLE_DATA } from './datatable-datasource';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DatatableItem>;
  dataSource = EXAMPLE_DATA;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'adress', 'city'];

  ngAfterViewInit(): void {
    /** 
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    */
    this.table.dataSource = this.dataSource;
  }
}
