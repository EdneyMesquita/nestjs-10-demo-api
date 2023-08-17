import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { InvalidRelationError } from '../errors/invalid-relation.error';

@Catch()
export class CatchAllErrorsExceptionFilter extends BaseExceptionFilter {
  catch(exception: InvalidRelationError, host: ArgumentsHost) {
    return super.catch(exception, host);
  }
}
