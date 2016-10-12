export function pickBy<TResult extends {}, T extends {}>(object: T = {} as T,
                                                         predicate: (element: any, key?: string) => boolean = (_element) => true): TResult {
  const result: TResult = {} as TResult;

  Object.keys(object).forEach((key) => {
    const value = object[key];

    if (predicate(value, key)) result[key] = value;
  });

  return result;
}