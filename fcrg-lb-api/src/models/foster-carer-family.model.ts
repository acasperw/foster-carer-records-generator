import {Entity, model, property, hasMany} from '@loopback/repository';
import {FosterCarer} from './foster-carer.model';
import {Child} from './child.model';

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

  @hasMany(() => FosterCarer)
  fosterCarers: FosterCarer[];

  @hasMany(() => Child)
  children: Child[];

  constructor(data?: Partial<FosterCarerFamily>) {
    super(data);
  }
}

export interface FosterCarerFamilyRelations {
  // describe navigational properties here
}

export type FosterCarerFamilyWithRelations = FosterCarerFamily & FosterCarerFamilyRelations;
