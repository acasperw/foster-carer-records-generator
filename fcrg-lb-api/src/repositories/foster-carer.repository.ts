import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {FosterCarer, FosterCarerRelations} from '../models';

export class FosterCarerRepository extends DefaultCrudRepository<
  FosterCarer,
  typeof FosterCarer.prototype.id,
  FosterCarerRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(FosterCarer, dataSource);
  }
}
