import {Component, inject, Input} from '@angular/core';
import {IPost} from '../../../core/models/post';
import {CutTextPipe} from '../../pipes/cut-text.pipe';
import {PostService} from '../../../core/services/post.service';
import {ShowIfLikedDirective} from '../../directives/show-if-liked.directive';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [
    CutTextPipe,
    ShowIfLikedDirective,
    NgIf
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  private postService = inject(PostService)
  @Input() post!: IPost
  protected readonly Boolean = Boolean;

  public isShowComment: boolean = false;

  public like(id: number) {
    this.postService.likePost(id)
  }


}
