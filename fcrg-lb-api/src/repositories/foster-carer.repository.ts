import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {FosterCarer, FosterCarerRelations, FosterCarerFamily} from '../models';
import {FosterCarerFamilyRepository} from './foster-carer-family.repository';

export class FosterCarerRepository extends DefaultCrudRepository<
  FosterCarer,
  typeof FosterCarer.prototype.id,
  FosterCarerRelations
> {

  public readonly fosterCarerFamily: BelongsToAccessor<FosterCarerFamily, typeof FosterCarer.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('FosterCarerFamilyRepository') protected fosterCarerFamilyRepositoryGetter: Getter<FosterCarerFamilyRepository>,
  ) {
    super(FosterCarer, dataSource);
    this.fosterCarerFamily = this.createBelongsToAccessorFor('fosterCarerFamily', fosterCarerFamilyRepositoryGetter,);
    this.registerInclusionResolver('fosterCarerFamily', this.fosterCarerFamily.inclusionResolver);
  }
}
