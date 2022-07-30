import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  FosterCarerFamily,
  Child,
} from '../models';
import {FosterCarerFamilyRepository} from '../repositories';

export class FosterCarerFamilyChildController {
  constructor(
    @repository(FosterCarerFamilyRepository) protected fosterCarerFamilyRepository: FosterCarerFamilyRepository,
  ) { }

  @get('/foster-carer-families/{id}/children', {
    responses: {
      '200': {
        description: 'Array of FosterCarerFamily has many Child',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Child)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Child>,
  ): Promise<Child[]> {
    return this.fosterCarerFamilyRepository.children(id).find(filter);
  }

  @post('/foster-carer-families/{id}/children', {
    responses: {
      '200': {
        description: 'FosterCarerFamily model instance',
        content: {'application/json': {schema: getModelSchemaRef(Child)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof FosterCarerFamily.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Child, {
            title: 'NewChildInFosterCarerFamily',
            exclude: ['id'],
            optional: ['fosterCarerFamilyId']
          }),
        },
      },
    }) child: Omit<Child, 'id'>,
  ): Promise<Child> {
    return this.fosterCarerFamilyRepository.children(id).create(child);
  }

  @patch('/foster-carer-families/{id}/children', {
    responses: {
      '200': {
        description: 'FosterCarerFamily.Child PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Child, {partial: true}),
        },
      },
    })
    child: Partial<Child>,
    @param.query.object('where', getWhereSchemaFor(Child)) where?: Where<Child>,
  ): Promise<Count> {
    return this.fosterCarerFamilyRepository.children(id).patch(child, where);
  }

  @del('/foster-carer-families/{id}/children', {
    responses: {
      '200': {
        description: 'FosterCarerFamily.Child DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Child)) where?: Where<Child>,
  ): Promise<Count> {
    return this.fosterCarerFamilyRepository.children(id).delete(where);
  }
}
