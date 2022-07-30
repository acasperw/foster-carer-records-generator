import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {FosterCarer} from '../models';
import {FosterCarerRepository} from '../repositories';

export class FosterCarerController {
  constructor(
    @repository(FosterCarerRepository)
    public fosterCarerRepository : FosterCarerRepository,
  ) {}

  @post('/foster-carers')
  @response(200, {
    description: 'FosterCarer model instance',
    content: {'application/json': {schema: getModelSchemaRef(FosterCarer)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FosterCarer, {
            title: 'NewFosterCarer',
            exclude: ['id'],
          }),
        },
      },
    })
    fosterCarer: Omit<FosterCarer, 'id'>,
  ): Promise<FosterCarer> {
    return this.fosterCarerRepository.create(fosterCarer);
  }

  @get('/foster-carers/count')
  @response(200, {
    description: 'FosterCarer model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FosterCarer) where?: Where<FosterCarer>,
  ): Promise<Count> {
    return this.fosterCarerRepository.count(where);
  }

  @get('/foster-carers')
  @response(200, {
    description: 'Array of FosterCarer model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FosterCarer, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FosterCarer) filter?: Filter<FosterCarer>,
  ): Promise<FosterCarer[]> {
    return this.fosterCarerRepository.find(filter);
  }

  @patch('/foster-carers')
  @response(200, {
    description: 'FosterCarer PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FosterCarer, {partial: true}),
        },
      },
    })
    fosterCarer: FosterCarer,
    @param.where(FosterCarer) where?: Where<FosterCarer>,
  ): Promise<Count> {
    return this.fosterCarerRepository.updateAll(fosterCarer, where);
  }

  @get('/foster-carers/{id}')
  @response(200, {
    description: 'FosterCarer model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FosterCarer, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(FosterCarer, {exclude: 'where'}) filter?: FilterExcludingWhere<FosterCarer>
  ): Promise<FosterCarer> {
    return this.fosterCarerRepository.findById(id, filter);
  }

  @patch('/foster-carers/{id}')
  @response(204, {
    description: 'FosterCarer PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FosterCarer, {partial: true}),
        },
      },
    })
    fosterCarer: FosterCarer,
  ): Promise<void> {
    await this.fosterCarerRepository.updateById(id, fosterCarer);
  }

  @put('/foster-carers/{id}')
  @response(204, {
    description: 'FosterCarer PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() fosterCarer: FosterCarer,
  ): Promise<void> {
    await this.fosterCarerRepository.replaceById(id, fosterCarer);
  }

  @del('/foster-carers/{id}')
  @response(204, {
    description: 'FosterCarer DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.fosterCarerRepository.deleteById(id);
  }
}
