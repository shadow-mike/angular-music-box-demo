import { environment } from '../environments/environment';

const REST_HOST_DEFS = {
  dev: 'http://localhost:2333/api',
  test: 'http://localhost:2333/api',
  prod: 'http://localhost:2333/api'
}

export const REST_HOST = REST_HOST_DEFS[environment.production ? 'prod' : 'dev'];