interface ClientResponse<T> {
  status: number;
  data: T;
  headers: Headers;
  url: string;
}

export async function client<T>(
  endpoint: string,
  { body, ...customConfig }: Partial<RequestInit> = {},
): Promise<ClientResponse<T>> {
  const headers = { "Content-Type": "application/json" };

  const config: RequestInit = {
    method: "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  let data;
  try {
    const response = await window.fetch(endpoint, config);
    data = await response.json();
    if (response.ok) {
      return {
        status: response.status,
        data,
        headers: response.headers,
        url: response.url,
      };
    }
    // noinspection ExceptionCaughtLocallyJS
    throw new Error(response.statusText);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return Promise.reject(err.message ? err.message : data);
  }
}

client.get = function <T>(
  endpoint: string,
  customConfig: Partial<RequestInit> = {},
) {
  return client<T>(endpoint, { ...customConfig, method: "GET" });
};
