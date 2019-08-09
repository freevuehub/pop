import Axios, { AxiosResponse, AxiosError } from 'axios';
import endpoint from './end.point';

export function getList(): Promise<any> {
  return new Promise<any>(
    (resolve, reject) => Axios.get(`${endpoint.BASE_URL}/${endpoint.VER}/tempList`)
      .then((res: AxiosResponse) => resolve(res))
      .catch((e: AxiosError) => reject(e))
  );
};