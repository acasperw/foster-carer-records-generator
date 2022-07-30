import {model, property, belongsTo} from '@loopback/repository';
import {Person} from '.';
import {FosterCarerFamily} from './foster-carer-family.model';

@model()
export class FosterCarer extends Person {

  @belongsTo(() => FosterCarerFamily)
  fosterCarerFamilyId: string;

  constructor(data?: Partial<FosterCarer>) {
    super(data);
  }
}

export interface FosterCarerRelations {
  // describe navigational properties here
}

export type FosterCarerWithRelations = FosterCarer & FosterCarerRelations;
