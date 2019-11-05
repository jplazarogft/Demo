import { Component, OnInit } from '@angular/core';
import { tags } from '@mocks/user-feed-tags';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.scss'],
})
export class UserFeedComponent implements OnInit {
  userTags = tags;

  constructor() {}

  ngOnInit() {}
}
