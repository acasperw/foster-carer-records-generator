import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Child, ChildRelations, FosterCarerFamily} from '../models';
import {FosterCarerFamilyRepository} from './foster-carer-family.repository';

export class ChildRepository extends DefaultCrudRepository<
  Child,
  typeof Child.prototype.id,
  ChildRelations
> {

  public readonly fosterCarerFamily: BelongsToAccessor<FosterCarerFamily, typeof Child.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('FosterCarerFamilyRepository') protected fosterCarerFamilyRepositoryGetter: Getter<FosterCarerFamilyRepository>,
  ) {
    super(Child, dataSource);
    this.fosterCarerFamily = this.createBelongsToAccessorFor('fosterCarerFamily', fosterCarerFamilyRepositoryGetter,);
    this.registerInclusionResolver('fosterCarerFamily', this.fosterCarerFamily.inclusionResolver);
  }
}
