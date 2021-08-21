export const apiHeaders = (content: { length: number } = { length: 0 }, options: {} = {}) =>
  new Headers({
    Accept: "application/json",
    "Content-Length": content.length + "",
    "Content-Type": "application/json",
    "X-csrf-validation": "-",
    ...options,
  });

export const request = (path: string, options: RequestInit = {}) => {
  return fetch(`api/${path}`, {
    headers: apiHeaders((options.body as any) || ""),
    ...options,
    credentials: "include",
  });
};
