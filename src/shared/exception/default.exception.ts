import { HttpException, HttpStatus } from '@nestjs/common';

export class DefaultException extends HttpException {
  constructor(name: string, error: string) {
    super(error, HttpStatus.BAD_REQUEST);
    this.name = `${name}Error`;
  }
}
