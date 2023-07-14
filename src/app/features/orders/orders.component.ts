import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns = [
    {
      id: 'created',
      name: 'Created',
      field: 'created_at'
    },
    {
      id: 'state',
      name: 'State',
      field: 'state'
    },
    {
      id: 'number',
      name: '#',
      field: 'number'
    },
    {
      id: 'title',
      name: 'Title',
      field: 'title'
    }
  ];

  constructor(private _httpClient: HttpClient) {

  }

  ngOnInit() {

  }
  getRepoIssues: (sort: string, order: string, page: number) => Observable<GithubApi> = (sort, order, page) => {
    const href = 'https://api.github.com/search/issues';
    const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1
      }`;

    return this._httpClient.get<GithubApi>(requestUrl);
  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}
