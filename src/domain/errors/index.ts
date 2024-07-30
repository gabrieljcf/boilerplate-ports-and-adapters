export class InvalidDataException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidDataException";
  }
}

export class NotFoundException extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundException";
  }
}
