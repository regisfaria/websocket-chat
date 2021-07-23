import { server } from "./http";
import '../src/websocket/ChatService';

server.listen(3000, () => console.log("🚀 Server started at port: 3000 🚀"));