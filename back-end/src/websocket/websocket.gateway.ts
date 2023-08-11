// // // websocket.gateway.ts

// // import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
// // import { Server, Socket } from 'socket.io';

// // @WebSocketGateway(8080)
// // export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
// //   @WebSocketServer()
// //   server: Server;

// //   async handleConnection(client: Socket) {
// //     console.log(`Client connected: ${client.id}`);
// //   }

// //   async handleDisconnect(client: Socket) {
// //     console.log(`Client disconnected: ${client.id}`);
// //   }

// //   @SubscribeMessage('keyInput') // 클라이언트가 'keyInput' 이벤트로 메시지를 보낼 때 호출됨
// //   handleKeyInput(client: Socket, data: string) {
// //     console.log(`Received key input from client ${client.id}: ${data}`);
// //     this.server.emit('keyInput', data); // 다른 모든 클라이언트에게 메시지 전송
// //   } 
// // }
// import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, MessageBody } from '@nestjs/websockets';
// import { Server,WebSocket } from 'ws';

// @WebSocketGateway(8080)
// export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
//   @WebSocketServer() server: Server;

//   handleConnection(client: WebSocket) {
//     console.log(`Client connected: ${client.id}`);
//   }

//   handleDisconnect(client: WebSocket) {
//     console.log(`Client disconnected: ${client.id}`);
//   }

//   @SubscribeMessage('keyPressed')
//   handleKeyPressed(client: WebSocket, @MessageBody() data: any) {
//     console.log("Good");
//     console.log(`Received video data from client: ${data.byteLength} bytes`);
//   }
// }
import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, WebSocket } from 'ws';

@WebSocketGateway(8080)
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  handleConnection(client: WebSocket) {
    console.log(`Client connected: ${client}`);
  }

  handleDisconnect(client: WebSocket) {
    console.log(`Client disconnected: ${client}`);
  }

  // @SubscribeMessage('message')
  // handleMessage(client: WebSocket, @MessageBody() payload: any): void {
  //   const key = payload.key;
  //   console.log(`Received key from client: ${key}`);
  // }
  @SubscribeMessage('keys')
  handleMessage(client: WebSocket, @MessageBody() payload: any): void {
    try {
      const key = payload.key;
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
