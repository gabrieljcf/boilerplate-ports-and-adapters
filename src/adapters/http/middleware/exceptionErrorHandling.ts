import { InvalidDataException, NotFoundException } from "@/domain/errors";
import { Request, Response, NextFunction } from "express";

export default function exceptionErrorHandling(
  error: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): Response {
  if (error instanceof InvalidDataException) {
    return res.status(400).json({ error: error.message }).send();
  }
  if (error instanceof NotFoundException) {
    return res.status(404).json({ error: error.message }).send();
  }
  return res.status(500).json({ error: "Internal Server Error" }).send();
}
