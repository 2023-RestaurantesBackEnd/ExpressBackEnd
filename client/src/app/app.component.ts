import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { SocketService } from './shared/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'client';
  socketArray: any = [];

  constructor(private socketService: SocketService) {}
  ngOnInit(): void {
    const socketKey: string = 'update';

    this.socketService.listen(socketKey).subscribe((x) => {
      const socketData = x[socketKey];
      if (!socketData) return;
      this.socketArray.push(socketData);
    });
  }
}
