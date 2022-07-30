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
import {FosterCarerFamily} from '../models';
import {FosterCarerFamilyRepository} from '../repositories';

export class FamilyController {
  constructor(
    @repository(FosterCarerFamilyRepository)
    public fosterCarerFamilyRepository : FosterCarerFamilyRepository,
  ) {}

  @post('/foster-carer-families')
  @response(200, {
    description: 'FosterCarerFamily model instance',
    content: {'application/json': {schema: getModelSchemaRef(FosterCarerFamily)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FosterCarerFamily, {
            title: 'NewFosterCarerFamily',
            exclude: ['id'],
          }),
        },
      },
    })
    fosterCarerFamily: Omit<FosterCarerFamily, 'id'>,
  ): Promise<FosterCarerFamily> {
    return this.fosterCarerFamilyRepository.create(fosterCarerFamily);
  }

  @get('/foster-carer-families/count')
  @response(200, {
    description: 'FosterCarerFamily model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FosterCarerFamily) where?: Where<FosterCarerFamily>,
  ): Promise<Count> {
    return this.fosterCarerFamilyRepository.count(where);
  }

  @get('/foster-carer-families')
  @response(200, {
    description: 'Array of FosterCarerFamily model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FosterCarerFamily, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FosterCarerFamily) filter?: Filter<FosterCarerFamily>,
  ): Promise<FosterCarerFamily[]> {
    return this.fosterCarerFamilyRepository.find(filter);
  }

  @patch('/foster-carer-families')
  @response(200, {
    description: 'FosterCarerFamily PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FosterCarerFamily, {partial: true}),
        },
      },
    })
    fosterCarerFamily: FosterCarerFamily,
    @param.where(FosterCarerFamily) where?: Where<FosterCarerFamily>,
  ): Promise<Count> {
    return this.fosterCarerFamilyRepository.updateAll(fosterCarerFamily, where);
  }

  @get('/foster-carer-families/{id}')
  @response(200, {
    description: 'FosterCarerFamily model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FosterCarerFamily, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(FosterCarerFamily, {exclude: 'where'}) filter?: FilterExcludingWhere<FosterCarerFamily>
  ): Promise<FosterCarerFamily> {
    return this.fosterCarerFamilyRepository.findById(id, filter);
  }

  @patch('/foster-carer-families/{id}')
  @response(204, {
    description: 'FosterCarerFamily PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FosterCarerFamily, {partial: true}),
        },
      },
    })
    fosterCarerFamily: FosterCarerFamily,
  ): Promise<void> {
    await this.fosterCarerFamilyRepository.updateById(id, fosterCarerFamily);
  }

  @put('/foster-carer-families/{id}')
  @response(204, {
    description: 'FosterCarerFamily PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() fosterCarerFamily: FosterCarerFamily,
  ): Promise<void> {
    await this.fosterCarerFamilyRepository.replaceById(id, fosterCarerFamily);
  }

  @del('/foster-carer-families/{id}')
  @response(204, {
    description: 'FosterCarerFamily DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.fosterCarerFamilyRepository.deleteById(id);
  }
}
