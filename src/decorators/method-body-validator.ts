import { MethodDescriptor } from "../constants/method-descriptor";
import "reflect-metadata";
import { MetaData } from "../constants/metadata";

/**
 * Decorator for validating request-body
 * @param bodyProps props required in request-body
 * @returns Function which set the body validator for the RequestHandler on which decorator is used
 * @author Shubham Kumar
 */
export function ValidateBody(...bodyProps: string[]) {
  return function (target: any, key: string, descriptor: MethodDescriptor) {
    Reflect.defineMetadata(
      MetaData.REQUIRED_BODY_PROPS,
      [...bodyProps],
      target,
      key
    );
  };
}
