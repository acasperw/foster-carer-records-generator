import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Child, ChildRelations} from '../models';

export class ChildRepository extends DefaultCrudRepository<
  Child,
  typeof Child.prototype.id,
  ChildRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Child, dataSource);
  }
}
