import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, MessageBody } from '@nestjs/websockets';
import { subscribe } from 'diagnostics_channel';
import { subscribeOn } from 'rxjs';
import { Server,WebSocket } from 'ws';
import * as zlib from 'zlib';

@WebSocketGateway(6001)
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: WebSocket) {
    console.log(`Client connected!: ${client.id}`);
  }

  handleDisconnect(client: WebSocket) {
    console.log(`Client disconnected!: ${client.id}`);
  }

  @SubscribeMessage('keyPressed')
  handleKeyPressed(client: WebSocket, @MessageBody() data: any) {
    console.log("Good");
    console.log(`Received video data from client: ${data.byteLength} bytes`);
  }

  @SubscribeMessage('video')
  handleVideo(client: WebSocket, @MessageBody() data: any): void {
    // 영상 데이터를 다른 클라이언트에게 브로드캐스트
    const compressedBuffer = Buffer.from(data, 'base64');
    const buffer = zlib.inflateSync(compressedBuffer);

    //console.log("video: " + buffer);
    this.server.clients.forEach((client) => {
      if(client.readyState === WebSocket.OPEN){
        client.send(buffer);
        console.log(typeof(buffer))
        // client.send(typeof(buffer));
      }
    });
  }

  @SubscribeMessage('command')
  handleMessage(client: WebSocket, @MessageBody() payload: any): void {
    try {
      //console.log(JSON.parse(payload));
      console.log("command: " + payload);
      const key = payload;
      console.log(`Received key from client: ${key}`);
      // 메시지 처리 로직을 추가합니다.
    } catch (error) {
      console.error('Error handling message:', error);
      // 오류 처리 로직을 추가합니다.
    }
    this.server.clients.forEach((client) => {
      if(client.readyState === WebSocket.OPEN){
        client.send(payload);
      }
    });
  }

}


