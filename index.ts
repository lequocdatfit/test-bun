import figlet from "figlet";
import index from "./index.html";

const server = Bun.serve({
  port: process.env.PORT,
  routes: {
    "/": index,
    "/figlet": () => {
      const body = figlet.textSync("Bun!");
      return new Response(body);
    },
  },
});

console.log(`Listening on ${server.url}`);
