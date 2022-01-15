import "reflect-metadata";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { AppRouter } from "../app-router";
import { MetaData } from "../constants/metadata";
import { Method } from "../constants/method";

function bodyValidator(props: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): void {
    if (!req.body) {
      res.status(403).send({ message: "Invalid Request" });
      return;
    }

    const missingProps: string[] = [];
    for (const prop of props) {
      if (typeof req.body[prop] !== "boolean" && !req.body[prop]) {
        missingProps.push(prop);
      }
    }

    if (missingProps.length) {
      res.status(403).send({ message: `Missing: ${missingProps.toString()}` });
      return;
    }

    next();
  };
}

/**
 * Decorator to be used for class to set the route-handlers in class
 * @param routePrefix route-prefix for the express-router
 * @returns Function which sets the route and associate all the route-handlers
 * @author Shubham Kumar
 */
export function Controller(routePrefix: string) {
  return function (target: Function) {
    const appRouter = AppRouter.router;

    // Iterating through all end-points defined in class
    for (const key in target.prototype) {
      const routeHandler: RequestHandler = target.prototype[key];

      // pulling metadata
      const endPoint: string = Reflect.getMetadata(
        MetaData.END_POINT,
        target.prototype,
        key
      );
      const method: Method = Reflect.getMetadata(
        MetaData.METHOD,
        target.prototype,
        key
      );
      const middlewares: RequestHandler[] =
        Reflect.getMetadata(MetaData.MIDDLEWARE, target.prototype, key) || [];
      const requiredBodyprops: string[] =
        Reflect.getMetadata(
          MetaData.REQUIRED_BODY_PROPS,
          target.prototype,
          key
        ) || [];

      // Defining body-validator middleware
      const _bodyValidator = bodyValidator(requiredBodyprops);

      appRouter[method](
        `${routePrefix}${endPoint}`,
        _bodyValidator,
        ...middlewares,
        routeHandler
      );
    }
  };
}
