export type ApiFetchOptions = RequestInit & {
  searchParams?: Record<string, string | undefined>;
  baseUrl?: string;
};

export type ApiFetchResponse<T> =
  | { data: T; error?: undefined }
  | { data?: undefined; error: string };

export type ApiFetchFn<Options extends ApiFetchOptions = ApiFetchOptions> = <T>(
  input: RequestInfo | URL,
  options?: Options | undefined
) => Promise<ApiFetchResponse<T>>;

export const apiFetch: ApiFetchFn = async (inputUrl, options?) => {
  const url = new URL(inputUrl.toString());

  if (options?.searchParams) {
    Object.entries(options.searchParams).forEach(([key, value]) => {
      if (value) url.searchParams.append(key, value);
    });
  }

  try {
    const response = await fetch(url.toString(), options);
    const data = await response.json();

    if (!response.ok && (data?.message || data?.error)) {
      console.error(
        `method: ${options?.method || 'GET'}`,
        `Fetch failed with status ${response.status} (${response.statusText})`,
        'URL:',
        url.toString(),
        'Response:',
        data
      );
      return {
        error:
          data.message ||
          data.error ||
          `Error: ${response.status} ${response.statusText}`,
      };
    }

    return { data };
  } catch (error) {
    console.error('Error during fetch:', error, 'for URL:', url.toString());
    throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
  }
};
