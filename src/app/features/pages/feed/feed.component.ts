import {Component, inject, OnInit} from '@angular/core';
import {PostService} from '../../../core/services/post.service';
import {IPost} from '../../../core/models/post';
import {PostComponent} from '../../../shared/components/post/post.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-feed',
  imports: [
    PostComponent,
    NgForOf
  ],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit {
  private postService = inject(PostService)
  public posts: IPost[] = []

  ngOnInit() {
    this.posts = this.postService.getPosts()
  }
}
