import "reflect-metadata";
import { Method } from "../constants/method";
import { MetaData } from "../constants/metadata";
import { MethodDescriptor } from "../constants/method-descriptor";

function MethodBinder(method: Method) {
  return function (endPoint: string) {
    return function (target: any, key: string, descriptor: MethodDescriptor) {
      descriptor.enumerable = true;
      Reflect.defineMetadata(MetaData.END_POINT, endPoint, target, key);
      Reflect.defineMetadata(MetaData.METHOD, method, target, key);
    };
  };
}

/**
 * Decorator for binding CHECHOUT http-method to a class method
 * @author Shubham Kumar
 */
export const Checkout = MethodBinder(Method.CHECKOUT);
/**
 * Decorator for binding COPY http-method to a class method
 * @author Shubham Kumar
 */
export const Copy = MethodBinder(Method.COPY);
/**
 * Decorator for binding DELETE http-method to a class method
 * @author Shubham Kumar
 */
export const Delete = MethodBinder(Method.DELETE);
/**
 * Decorator for binding GET http-method to a class method
 * @author Shubham Kumar
 */
export const Get = MethodBinder(Method.GET);
/**
 * Decorator for binding HEAD http-method to a class method
 * @author Shubham Kumar
 */
export const Head = MethodBinder(Method.HEAD);
/**
 * Decorator for binding LOCK http-method to a class method
 * @author Shubham Kumar
 */
export const Lock = MethodBinder(Method.LOCK);
/**
 * Decorator for binding MERGE http-method to a class method
 * @author Shubham Kumar
 */
export const Merge = MethodBinder(Method.MERGE);
/**
 * Decorator for binding MKACTIVITY http-method to a class method
 * @author Shubham Kumar
 */
export const MkActivity = MethodBinder(Method.MKACTIVITY);
/**
 * Decorator for binding MKCOL http-method to a class method
 * @author Shubham Kumar
 */
export const MkCol = MethodBinder(Method.MKCOL);
/**
 * Decorator for binding MOVE http-method to a class method
 * @author Shubham Kumar
 */
export const Move = MethodBinder(Method.MOVE);
/**
 * Decorator for binding M-SEARCH http-method to a class method
 * @author Shubham Kumar
 */
export const MSearch = MethodBinder(Method.M_SEARCH);
/**
 * Decorator for binding NOTIFY http-method to a class method
 * @author Shubham Kumar
 */
export const Notify = MethodBinder(Method.NOTIFY);
/**
 * Decorator for binding OPTIONS http-method to a class method
 * @author Shubham Kumar
 */
export const Options = MethodBinder(Method.OPTIONS);
/**
 * Decorator for binding PATCH http-method to a class method
 * @author Shubham Kumar
 */
export const Patch = MethodBinder(Method.PATCH);
/**
 * Decorator for binding POST http-method to a class method
 * @author Shubham Kumar
 */
export const Post = MethodBinder(Method.POST);
/**
 * Decorator for binding PURGE http-method to a class method
 * @author Shubham Kumar
 */
export const Purge = MethodBinder(Method.PURGE);
/**
 * Decorator for binding PUT http-method to a class method
 * @author Shubham Kumar
 */
export const Put = MethodBinder(Method.PUT);
/**
 * Decorator for binding REPORT http-method to a class method
 * @author Shubham Kumar
 */
export const Report = MethodBinder(Method.REPORT);
/**
 * Decorator for binding SEARCH http-method to a class method
 * @author Shubham Kumar
 */
export const Search = MethodBinder(Method.SEARCH);
/**
 * Decorator for binding SUBSCRIBE http-method to a class method
 * @author Shubham Kumar
 */
export const Subscribe = MethodBinder(Method.SUBSCRIBE);
/**
 * Decorator for binding TRACE http-method to a class method
 * @author Shubham Kumar
 */
export const Trace = MethodBinder(Method.TRACE);
/**
 * Decorator for binding UNLOCK http-method to a class method
 * @author Shubham Kumar
 */
export const Unlock = MethodBinder(Method.UNLOCK);
/**
 * Decorator for binding UNSUBSCRIBE http-method to a class method
 * @author Shubham Kumar
 */
export const UnSubscribe = MethodBinder(Method.UNSUBSCRIBE);
