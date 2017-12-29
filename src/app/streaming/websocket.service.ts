import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';


@Injectable()
export class WebsocketService {

  private subject: Rx.Subject<MessageEvent>;
  private socket: WebSocket;

  constructor() { }

  connect(url: string): Rx.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
    }
    return this.subject;
  }

  private create(url: string): Rx.Subject<MessageEvent> {
    this.socket = new WebSocket(url);

    let observable = Rx.Observable.create(
      (obs: Rx.Observer<MessageEvent>) => {
        this.socket.onmessage = obs.next.bind(obs);
        this.socket.onerror = obs.error.bind(obs);
        this.socket.onclose = obs.complete.bind(obs);
        return this.socket.close.bind(this.socket);
      });

    let observer = {
      next: (data: any) => {
        if (this.socket.readyState === WebSocket.OPEN) {
          this.socket.send(JSON.stringify(data));
        }
      }
    };
    return Rx.Subject.create(observer, observable);
  }

  close(): void {
    this.socket.close();
  }

}
