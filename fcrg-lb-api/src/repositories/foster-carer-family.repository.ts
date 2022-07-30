import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {FosterCarerFamily, FosterCarerFamilyRelations, FosterCarer, Child} from '../models';
import {FosterCarerRepository} from './foster-carer.repository';
import {ChildRepository} from './child.repository';

export class FosterCarerFamilyRepository extends DefaultCrudRepository<
  FosterCarerFamily,
  typeof FosterCarerFamily.prototype.id,
  FosterCarerFamilyRelations
> {

  public readonly fosterCarers: HasManyRepositoryFactory<FosterCarer, typeof FosterCarerFamily.prototype.id>;

  public readonly children: HasManyRepositoryFactory<Child, typeof FosterCarerFamily.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('FosterCarerRepository') protected fosterCarerRepositoryGetter: Getter<FosterCarerRepository>, @repository.getter('ChildRepository') protected childRepositoryGetter: Getter<ChildRepository>,
  ) {
    super(FosterCarerFamily, dataSource);
    this.children = this.createHasManyRepositoryFactoryFor('children', childRepositoryGetter,);
    this.registerInclusionResolver('children', this.children.inclusionResolver);
    this.fosterCarers = this.createHasManyRepositoryFactoryFor('fosterCarers', fosterCarerRepositoryGetter,);
    this.registerInclusionResolver('fosterCarers', this.fosterCarers.inclusionResolver);
  }
}
