import { NextFunction, Request, Response } from "express";

export class ValidationError extends Error {}

export const handleError = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message)

    res
        .status(err instanceof ValidationError? 400 : 500)
        .render('error', {
            message: err instanceof ValidationError ? err.message : 'Error occuered.'
        })

}