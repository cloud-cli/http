import { loadConfig, ProxyServer, ProxySettings } from '@cloud-cli/proxy';
import { IncomingMessage, ServerResponse, createServer } from 'http';

export default async function (handler: (request: IncomingMessage, response: ServerResponse) => any) {
  let server;
  const config = await loadConfig('', true);

  if (config) {
    const proxy = new ProxyServer(<ProxySettings>{
      ...config,
      enableDebug: true,
      fallback: handler,
    });

    server = createServer((req, res) => proxy.handleRequest(req, res, false));
  } else {
    server = createServer((req, res) => {
      const end = res.end;

      res.end = (...args) => {
        console.log(`[${new Date().toISOString().slice(0, 19)}] ${req.method} ${req.url} [${res.statusCode}]`);
        return end.apply(res, args);
      };

      return handler(req, res);
    });
  }

  return server.listen(Number(process.env.PORT), () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
}
