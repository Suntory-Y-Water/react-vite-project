import useSWR from 'swr';

const fetcher = async <T,>(path: string): Promise<T> => {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error('エラーが発生しました');
  }
  return response.json() as Promise<T>;
};

export const useFetch = <T,>(path: string) => {
  const { data, error } = useSWR<T>(path, fetcher);

  return { data, error };
};
