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
  FosterCarer,
} from '../models';
import {FosterCarerFamilyRepository} from '../repositories';

export class FosterCarerFamilyFosterCarerController {
  constructor(
    @repository(FosterCarerFamilyRepository) protected fosterCarerFamilyRepository: FosterCarerFamilyRepository,
  ) { }

  @get('/foster-carer-families/{id}/foster-carers', {
    responses: {
      '200': {
        description: 'Array of FosterCarerFamily has many FosterCarer',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(FosterCarer)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<FosterCarer>,
  ): Promise<FosterCarer[]> {
    return this.fosterCarerFamilyRepository.fosterCarers(id).find(filter);
  }

  @post('/foster-carer-families/{id}/foster-carers', {
    responses: {
      '200': {
        description: 'FosterCarerFamily model instance',
        content: {'application/json': {schema: getModelSchemaRef(FosterCarer)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof FosterCarerFamily.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FosterCarer, {
            title: 'NewFosterCarerInFosterCarerFamily',
            exclude: ['id'],
            optional: ['fosterCarerFamilyId']
          }),
        },
      },
    }) fosterCarer: Omit<FosterCarer, 'id'>,
  ): Promise<FosterCarer> {
    return this.fosterCarerFamilyRepository.fosterCarers(id).create(fosterCarer);
  }

  @patch('/foster-carer-families/{id}/foster-carers', {
    responses: {
      '200': {
        description: 'FosterCarerFamily.FosterCarer PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FosterCarer, {partial: true}),
        },
      },
    })
    fosterCarer: Partial<FosterCarer>,
    @param.query.object('where', getWhereSchemaFor(FosterCarer)) where?: Where<FosterCarer>,
  ): Promise<Count> {
    return this.fosterCarerFamilyRepository.fosterCarers(id).patch(fosterCarer, where);
  }

  @del('/foster-carer-families/{id}/foster-carers', {
    responses: {
      '200': {
        description: 'FosterCarerFamily.FosterCarer DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(FosterCarer)) where?: Where<FosterCarer>,
  ): Promise<Count> {
    return this.fosterCarerFamilyRepository.fosterCarers(id).delete(where);
  }
}
