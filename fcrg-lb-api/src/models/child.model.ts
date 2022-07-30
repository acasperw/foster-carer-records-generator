import {model, belongsTo} from '@loopback/repository';
import {Person} from '.';
import {FosterCarerFamily} from './foster-carer-family.model';

@model()
export class Child extends Person {

  @belongsTo(() => FosterCarerFamily)
  fosterCarerFamilyId: string;

  constructor(data?: Partial<Child>) {
    super(data);
  }
}

export interface ChildRelations {
  // describe navigational properties here
}

export type ChildWithRelations = Child & ChildRelations;
