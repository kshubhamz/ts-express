import { Router } from "express";

/**
 * Router class on which all route handlers are to be set.
 * @author Shubham Kumar
 */
export class AppRouter {
  private static _router: Router;
  private constructor() {}

  static get router(): Router {
    if (!AppRouter._router) {
      AppRouter._router = Router();
    }
    return AppRouter._router;
  }
}
