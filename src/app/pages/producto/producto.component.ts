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
    // Add a default event to the first day as an example
    if (this.days.length > 0) {
      this.days[0].events.push({ title: 'Default Event', date: this.days[0].date });
    }
  }

  generateCalendar() {
    this.days = [];
    // Get the first and last date for the current month
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const startDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0);

    // Generate a Day object for every day in the month
    for (let day = 1; day <= lastDate.getDate(); day++) {
      const date = new Date(year, month, day);
      this.days.push({ date, events: [] });
    }
  }

  previousMonth() {
    // Navigate to the previous month and regenerate the calendar
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.generateCalendar();
  }

  nextMonth() {
    // Navigate to the next month and regenerate the calendar
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.generateCalendar();
  }

  addEvent(day: Day) {
    // Simple prompt to add a new event title
    const title = prompt('Enter event title:');
    if (title && title.trim().length > 0) {
      day.events.push({ title, date: day.date });
    }
  }

  editEvent(event: Event) {
    // Prompt to edit an existing event title
    const newTitle = prompt('Edit event title:', event.title);
    if (newTitle && newTitle.trim().length > 0) {
      event.title = newTitle;
    }
  }

  deleteEvent(event: Event) {
    // Find the day containing the event and remove the event from its array
    for (let day of this.days) {
      const index = day.events.indexOf(event);
      if (index > -1) {
        day.events.splice(index, 1);
        break;
      }
    }
  }
}