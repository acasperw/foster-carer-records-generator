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
import {Child} from '../models';
import {ChildRepository} from '../repositories';

export class ChildController {
  constructor(
    @repository(ChildRepository)
    public childRepository : ChildRepository,
  ) {}

  @post('/children')
  @response(200, {
    description: 'Child model instance',
    content: {'application/json': {schema: getModelSchemaRef(Child)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Child, {
            title: 'NewChild',
            exclude: ['id'],
          }),
        },
      },
    })
    child: Omit<Child, 'id'>,
  ): Promise<Child> {
    return this.childRepository.create(child);
  }

  @get('/children/count')
  @response(200, {
    description: 'Child model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Child) where?: Where<Child>,
  ): Promise<Count> {
    return this.childRepository.count(where);
  }

  @get('/children')
  @response(200, {
    description: 'Array of Child model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Child, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Child) filter?: Filter<Child>,
  ): Promise<Child[]> {
    return this.childRepository.find(filter);
  }

  @patch('/children')
  @response(200, {
    description: 'Child PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Child, {partial: true}),
        },
      },
    })
    child: Child,
    @param.where(Child) where?: Where<Child>,
  ): Promise<Count> {
    return this.childRepository.updateAll(child, where);
  }

  @get('/children/{id}')
  @response(200, {
    description: 'Child model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Child, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Child, {exclude: 'where'}) filter?: FilterExcludingWhere<Child>
  ): Promise<Child> {
    return this.childRepository.findById(id, filter);
  }

  @patch('/children/{id}')
  @response(204, {
    description: 'Child PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Child, {partial: true}),
        },
      },
    })
    child: Child,
  ): Promise<void> {
    await this.childRepository.updateById(id, child);
  }

  @put('/children/{id}')
  @response(204, {
    description: 'Child PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() child: Child,
  ): Promise<void> {
    await this.childRepository.replaceById(id, child);
  }

  @del('/children/{id}')
  @response(204, {
    description: 'Child DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.childRepository.deleteById(id);
  }
}
