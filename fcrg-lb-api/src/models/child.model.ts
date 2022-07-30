import {model} from '@loopback/repository';
import {Person} from '.';

@model()
export class Child extends Person {

  constructor(data?: Partial<Child>) {
    super(data);
  }
}

export interface ChildRelations {
  // describe navigational properties here
}

export type ChildWithRelations = Child & ChildRelations;
