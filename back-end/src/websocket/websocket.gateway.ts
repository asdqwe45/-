// websocket.gateway.ts

import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(8080)
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  async handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  async handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('keyInput') // 클라이언트가 'keyInput' 이벤트로 메시지를 보낼 때 호출됨
  handleKeyInput(client: Socket, data: string) {
    console.log(`Received key input from client ${client.id}: ${data}`);
    this.server.emit('keyInput', data); // 다른 모든 클라이언트에게 메시지 전송
  } 
}
