import { NgTemplateOutlet } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ComponentRef,
  ElementRef,
  QueryList,
  TemplateRef,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [ChildComponent, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'angular-tasks';
  // --- ViewChild ---
  // @ViewChild('paragraph') paragraph!: ElementRef<HTMLParagraphElement>;
  // @ViewChild('template') template!: TemplateRef<HTMLTemplateElement>;
  // @ViewChild(ChildComponent, { static: false })
  // component!: ComponentRef<ChildComponent>;

  // --- ViewChildren ---
  @ViewChildren('paragraph') paragraph!: QueryList<
    ElementRef<HTMLParagraphElement>
  >;
  @ViewChildren('template') template!: QueryList<
    TemplateRef<HTMLTemplateElement>
  >;
  @ViewChildren(ChildComponent)
  component!: QueryList<ComponentRef<ChildComponent>>;

  ngAfterViewInit(): void {
    console.log('paragraph', this.paragraph);
    console.log('template', this.template);
    console.log('component', this.component);
    // this.paragraph.nativeElement.textContent = 'Hello, Angular!';
    this.component.forEach((item) => console.log('item', item));
  }
}
