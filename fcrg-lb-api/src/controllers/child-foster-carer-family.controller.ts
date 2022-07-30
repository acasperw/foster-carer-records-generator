import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Child,
  FosterCarerFamily,
} from '../models';
import {ChildRepository} from '../repositories';

export class ChildFosterCarerFamilyController {
  constructor(
    @repository(ChildRepository)
    public childRepository: ChildRepository,
  ) { }

  @get('/children/{id}/foster-carer-family', {
    responses: {
      '200': {
        description: 'FosterCarerFamily belonging to Child',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(FosterCarerFamily)},
          },
        },
      },
    },
  })
  async getFosterCarerFamily(
    @param.path.string('id') id: typeof Child.prototype.id,
  ): Promise<FosterCarerFamily> {
    return this.childRepository.fosterCarerFamily(id);
  }
}
