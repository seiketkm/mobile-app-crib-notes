/**
 * Generated by orval v6.6.1 🍺
 * Do not edit manually.
 * SantokuApp REST API
 * SantokuAppのREST API。
 * OpenAPI spec version: 1.0.0
 */
import {useQuery, UseQueryOptions, QueryFunction, UseQueryResult, QueryKey} from 'react-query';
import type {TermsOfService} from '.././model';
import {backendCustomInstance, ErrorType} from '../../../framework/backend/customInstance';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (...args: any) => Promise<infer R> ? R : any;

/**
 * 有効な利用規約を取得します。このAPIの呼び出しには認証情報は不要です。

 * @summary 有効な利用規約の取得
 */
export const getTerms = () => {
  return backendCustomInstance<TermsOfService>({url: `/terms`, method: 'get'});
};

export const getGetTermsQueryKey = () => [`/terms`];

export const useGetTerms = <TData = AsyncReturnType<typeof getTerms>, TError = ErrorType<unknown>>(options?: {
  query?: UseQueryOptions<AsyncReturnType<typeof getTerms>, TError, TData>;
}): UseQueryResult<TData, TError> & {queryKey: QueryKey} => {
  const {query: queryOptions} = options || {};

  const queryKey = queryOptions?.queryKey ?? getGetTermsQueryKey();

  const queryFn: QueryFunction<AsyncReturnType<typeof getTerms>> = () => getTerms();

  const query = useQuery<AsyncReturnType<typeof getTerms>, TError, TData>(queryKey, queryFn, queryOptions);

  return {
    queryKey,
    ...query,
  };
};