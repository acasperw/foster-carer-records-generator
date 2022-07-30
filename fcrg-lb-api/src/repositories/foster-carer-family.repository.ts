import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {FosterCarerFamily, FosterCarerFamilyRelations} from '../models';

export class FosterCarerFamilyRepository extends DefaultCrudRepository<
  FosterCarerFamily,
  typeof FosterCarerFamily.prototype.id,
  FosterCarerFamilyRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(FosterCarerFamily, dataSource);
  }
}
