// https://www.typescriptlang.org/docs/handbook/utility-types.html

type Todo = {
  title: string;
  description: string;
}

type PartialTodo = Partial<Todo>
type AnotherTodo = Required<PartialTodo>

// Record as replacement for object

type ObjectLike = Record<string, unknown>


const properties = ['firstName', 'lastName', 'age'] as const

type Props = { [key in typeof properties[number]]: unknown }

type AnotherProps = Record<typeof properties[number], unknown>

type Picked = Pick<Props, 'firstName' | 'lastName'>

type Omitted = Omit<Props, 'firstName' | 'lastName'>


type SomeType = {
  a?: number;
  b: null | undefined | number;
  c: string;
  d?: string;
}


type NonNullA = NonNullable<SomeType['a']>
type NonNullB = NonNullable<SomeType['b']>
type NonNullT<T extends keyof SomeType> = NonNullable<SomeType[T]>
type T = NonNullT<'d'>

type Keys = keyof SomeType; //workaround
type NonNullSomeType = { [key in keyof SomeType]: SomeType[key] } // fix

type OnlyR<T, R> = T extends R ? T : never
type OnlyNumber<T> = OnlyR<T, number>

type SomeWithoutC = { [key in keyof SomeType as SomeType[key] extends number ? key : never]: SomeType[key] }

type FilterTypeByValueType<T,R>= { [key in keyof T as T[key] extends R ? key : never]: T[key] }


type OnlyStrings = FilterTypeByValueType<SomeType, string>

//if object has some type as property
type IfTHasProps<T, P extends string> = Required<T> extends Record<P, any> ? true : false

type Result = IfTHasProps<SomeType, 'a'>
