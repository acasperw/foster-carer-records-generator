import {model, property} from '@loopback/repository';
import {Person} from '.';

@model()
export class Child extends Person {
  @property({
    type: 'date',
    required: true,
  })
  dateOfBirth: string;


  constructor(data?: Partial<Child>) {
    super(data);
  }
}

export interface ChildRelations {
  // describe navigational properties here
}

export type ChildWithRelations = Child & ChildRelations;
