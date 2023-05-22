import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  socket!: Socket;
  socketData$: BehaviorSubject<any> = new BehaviorSubject({});

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  listen(key: string) {
    this.socket.on(key, (data: any) => {
      const currentData = this.socketData$.getValue();
      this.socketData$.next({
        ...currentData,
        [key]: data,
      });
    });

    return this.socketData$;
  }
}
