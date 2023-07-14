import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, SortDirection } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgIf, DatePipe } from '@angular/common';

export interface ObjectColumn {
  id: string;
  name: string;
  field: string;
}

export interface ObjectListResult {
  items: any[];
  total_count: number;
}

@Component({
  selector: 'app-object-table',
  templateUrl: './object-table.component.html',
  styleUrls: ['./object-table.component.css'],
})
export class ObjectTableComponent implements AfterViewInit {

  @Input()
  get columns(): ObjectColumn[] { return this.tableColumns; }
  set columns(columns: ObjectColumn[]) {
    this.tableColumns = columns;
    this.displayedTableColumns = this.tableColumns.map(r => r.id);
  }

  @Input() sortColumn: string;
  
  @Input()
  get columnDirection(): string { return this._columnDirection; }
  set columnDirection(columnDirection: string) {
    this._columnDirection = columnDirection;
    this.sortColumnDirection = this._columnDirection as SortDirection;
  }

  @Input() dataSource: (sort: string, direction: string, page: number) => Observable<ObjectListResult>;

  // binding data
  tableColumns: ObjectColumn[];
  displayedTableColumns: string[];
  sortColumnDirection: SortDirection;
  data: any[] = [];

  // private
  _columnDirection: string;

  resultsLength = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngAfterViewInit() {

    // If the user changes the sort order, reset back to the first page.
    this.sort?.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.dataSource(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex,
          ).pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data.total_count;
          return data.items;
        }),
      )
      .subscribe(data => (this.data = data));
  }
}