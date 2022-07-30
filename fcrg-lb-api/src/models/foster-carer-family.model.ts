import {Entity, model, property} from '@loopback/repository';

@model()
export class FosterCarerFamily extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  localAuthority?: string;


  constructor(data?: Partial<FosterCarerFamily>) {
    super(data);
  }
}

export interface FosterCarerFamilyRelations {
  // describe navigational properties here
}

export type FosterCarerFamilyWithRelations = FosterCarerFamily & FosterCarerFamilyRelations;
