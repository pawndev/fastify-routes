
import * as fastify from "fastify";
import * as http from "http";

type Route = Pick<fastify.RouteOptions & { path: string, prefix: string }, 'method' | 'schema' | 'url' | 'logLevel' | 'prefix' | 'bodyLimit' | 'handler'>
type RouteMapValue = {[key: string]: Route}

declare module "fastify" {
  interface FastifyInstance {
    routes: Map<string, RouteMapValue>;
  }
}

declare const fastifyRoutes: fastify.Plugin<
  http.Server,
  http.IncomingMessage,
  http.ServerResponse,
  {}
>;

export default fastifyRoutes;
