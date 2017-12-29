import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Subject, Observable } from 'rxjs/Rx';

@Injectable()
export class StreamingService<T> {
  private streamSource: Observable<any>;

  constructor(private websocketService: WebsocketService) {

   }

   stream(): Observable<T> {
      return this.streamSource.map(response => JSON.parse(response.data));
   }

   connect(url: string): void {
      this.streamSource = this.websocketService.connect(url);
   }

   disconnect(): void {
     this.websocketService.close();
   }

}
