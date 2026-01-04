import http from "http";
import { createServer } from "./index";

const app = createServer();

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
