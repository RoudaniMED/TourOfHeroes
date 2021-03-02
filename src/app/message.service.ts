import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}
  messages: string[] = [];
  // add a new message to the list messages
  add(message: string) {
    this.messages.push(message);
    console.log('messgaa',this.messages);
    
  }
  // clear the messages list
  clear() {
    this.messages = [];
  }
}
