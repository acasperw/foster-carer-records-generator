import {model} from '@loopback/repository';
import {Person} from '.';

@model()
export class FosterCarer extends Person {

  constructor(data?: Partial<FosterCarer>) {
    super(data);
  }
}

export interface FosterCarerRelations {
  // describe navigational properties here
}

export type FosterCarerWithRelations = FosterCarer & FosterCarerRelations;
