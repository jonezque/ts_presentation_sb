function getValue1<T extends Record<string, unknown>>(obj: T, value: string) {
  return obj[value];
}
getValue1(4, 's');
getValue1({ a: 4 }, 'b');
getValue1([], 'b');

function getValue2<T extends { [k: string]: unknown }, R extends keyof T>(
  obj: T,
  value: R
) {
  return obj[value];
}

getValue2(4, 's');
getValue2({ a: 4 }, 'b');
getValue2({ a: 4 }, 'a');

type NotArray<T> = T extends Array<any> ? never : T;

function someFunction<T, K = number, R = string>(a: T, b: K, c: R) {}
someFunction({}, 4, '');
someFunction<number, number, number>(1, 2, 3);

function parse<T = never>(input: string): T {
  return JSON.parse(input);
}

const result = parse('{ "a": 4}');
