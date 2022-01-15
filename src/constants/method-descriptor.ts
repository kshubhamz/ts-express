import { RequestHandler } from "express";

/**
 * Interface for RequestHandler descriptor
 */
export interface MethodDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}
