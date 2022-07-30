import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {FosterCarerFamily, FosterCarerFamilyRelations, FosterCarer} from '../models';
import {FosterCarerRepository} from './foster-carer.repository';

export class FosterCarerFamilyRepository extends DefaultCrudRepository<
  FosterCarerFamily,
  typeof FosterCarerFamily.prototype.id,
  FosterCarerFamilyRelations
> {

  public readonly fosterCarers: HasManyRepositoryFactory<FosterCarer, typeof FosterCarerFamily.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('FosterCarerRepository') protected fosterCarerRepositoryGetter: Getter<FosterCarerRepository>,
  ) {
    super(FosterCarerFamily, dataSource);
    this.fosterCarers = this.createHasManyRepositoryFactoryFor('fosterCarers', fosterCarerRepositoryGetter,);
    this.registerInclusionResolver('fosterCarers', this.fosterCarers.inclusionResolver);
  }
}
