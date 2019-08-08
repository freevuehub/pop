import Axios, { AxiosResponse, AxiosError } from 'axios';
import endpoint from './end.point';

export function test(): Promise<any> {
  return new Promise<any>(
    (resolve, reject) => Axios.get(`${endpoint.BASE_URL}/v1`)
      .then((res: AxiosResponse) => resolve(res))
      .catch((e: AxiosError) => reject(e))
  );
};

export function db(): Promise<any> {
  return new Promise<any>(
    (resolve, reject) => Axios.get(`${endpoint.BASE_URL}/v1/list`)
      .then((res: AxiosResponse) => resolve(res))
      .catch((e: AxiosError) => reject(e))
  );
};