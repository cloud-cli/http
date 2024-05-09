import { IncomingMessage, ServerResponse, createServer } from 'http';

export default function (handler: (request: IncomingMessage, response: ServerResponse) => any) {
  return createServer((req, res) => {
    const end = res.end;

    res.end = (...args) => {
      console.log(`[${new Date().toISOString().slice(0, 19)}] ${req.method} ${req.url} [${res.statusCode}]`);
      return end.apply(res, args);
    };

    return handler(req, res);
  }).listen(Number(process.env.PORT), () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
}
