import Axios, { AxiosResponse, AxiosError } from 'axios';

export function test(): Promise<any> {
  return new Promise<any>(
    (resolve, reject) => Axios.get('http://localhost:5000/freevue-27191/us-central1/helloWorld')
      .then((res: AxiosResponse) => resolve(res))
      .catch((e: AxiosError) => reject(e))
  )
}