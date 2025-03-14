import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Event {
  title: string;
  date: Date;
}

interface Day {
  date: Date;
  events: Event[];
}

@Component({
  selector: 'app-producto',
  imports:[CommonModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {
  currentMonth: Date = new Date();
  days: Day[] = [];

  constructor() {
    this.generateCalendar();
    if (this.days.length > 0) {
      this.days[0].events.push({ title: 'Default Event', date: this.days[0].date });
    }
  }

  generateCalendar() {
    this.days = [];
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const startDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);

    for (let day = 1; day <= lastDate.getDate(); day++) {
      const date = new Date(year, month, day);
      this.days.push({ date, events: [] });
    }
  }

  previousMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.generateCalendar();
  }

  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.generateCalendar();
  }

  addEvent(day: Day) {
    const title = prompt('Enter event title:');
    if (title && title.trim().length > 0) {
      day.events.push({ title, date: day.date });
    }
  }

  editEvent(event: Event) {
    const newTitle = prompt('Edit event title:', event.title);
    if (newTitle && newTitle.trim().length > 0) {
      event.title = newTitle;
    }
  }

  deleteEvent(event: Event) {
    for (let day of this.days) {
      const index = day.events.indexOf(event);
      if (index > -1) {
        day.events.splice(index, 1);
        break;
      }
    }
  }
}