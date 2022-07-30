import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  FosterCarer,
  FosterCarerFamily,
} from '../models';
import {FosterCarerRepository} from '../repositories';

export class FosterCarerFosterCarerFamilyController {
  constructor(
    @repository(FosterCarerRepository)
    public fosterCarerRepository: FosterCarerRepository,
  ) { }

  @get('/foster-carers/{id}/foster-carer-family', {
    responses: {
      '200': {
        description: 'FosterCarerFamily belonging to FosterCarer',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(FosterCarerFamily)},
          },
        },
      },
    },
  })
  async getFosterCarerFamily(
    @param.path.string('id') id: typeof FosterCarer.prototype.id,
  ): Promise<FosterCarerFamily> {
    return this.fosterCarerRepository.fosterCarerFamily(id);
  }
}
