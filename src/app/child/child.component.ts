import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements AfterContentInit {
  title = 'Child Component';

  // --- ContentChild ---
  // @ContentChild('tag', { static: false })
  // paragraph!: ElementRef<HTMLParagraphElement>;
  // @ContentChild(TemplateRef) template!: TemplateRef<HTMLTemplateElement>;

  // --- ContentChildren ---
  @ContentChildren('tag')
  allContentChildren!: QueryList<ElementRef<HTMLParagraphElement>>;

  ngAfterContentInit() {
    // this.paragraph && console.log('paragraph ', this.paragraph);
    // this.template && console.log('template ', this.template);

    this.allContentChildren &&
      console.log('allContentChildren', this.allContentChildren);
  }
}
