// puede ser axios
//import httpClient from '../../shared/httpClient';
import axios from "axios";
import type { Counter } from "../domain/counterEntity";
import { create } from "../domain/counterModel";

const BASE_URL = "counter";

function getCounter(): Promise<Counter> {
  return axios.get<number>(BASE_URL).then((res: any) => create(res.data));
}

function updateCounter(counter: Counter): Promise<Counter> {
  return axios
    .put<number>(BASE_URL, { count: counter.value })
    .then((res: any) => create(res.data));
}

export { getCounter, updateCounter };
