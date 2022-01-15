import "reflect-metadata";
import { RequestHandler } from "express";
import { MethodDescriptor } from "../constants/method-descriptor";
import { MetaData } from "../constants/metadata";

/**
 * Decorator to define middleware for the express-route handler
 * @param middlewares RequestHandlers to be used as middleware for express-route
 * @returns Function which set the middleware for the RequestHandler on which decorator is used
 * @author Shubham Kumar
 */
export function UseMiddlewares(...middlewares: RequestHandler[]) {
  return function (target: any, key: string, descriptor: MethodDescriptor) {
    Reflect.defineMetadata(MetaData.MIDDLEWARE, [...middlewares], target, key);
  };
}
