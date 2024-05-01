export const useFetch = async (
  route: string,
  method: string,
  body?: any,
  headers?: HeadersInit | undefined,
  mode?: RequestMode | undefined
) => {
  return await fetch(route, {
    method: method ?? "GET",
    mode: mode ?? "no-cors",
    body: JSON.stringify(body),
    headers,
  });
};
