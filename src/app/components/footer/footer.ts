import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chatbot } from '../chatbot/chatbot';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, Chatbot],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  isChatOpen = false;

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }
}
