import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss',
})
export class UserCardComponent {
  @Input() user!: { id: number; name: string };

  @Output() userDeleted = new EventEmitter<void>();

  deleteUser() {
    this.userDeleted.emit();
  }
}
