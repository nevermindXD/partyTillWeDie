import express, { Request, Response } from 'express';

export abstract class BaseController {

    /**
   * This is the implementation that we will leave to the
   * subclasses to figure out. 
   */
    protected abstract executeImpl (req: Request, res :Response): Promise<void | any>

    /**
   * This is what we will call on the route handler.
   * We also make sure to catch any uncaught errors in the
   * implementation.
   */
}