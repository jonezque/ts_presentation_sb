// Condditional Types https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
// promise
type Awaittable<T> = T extends Promise<infer K> ? K : never

type PromiseNumber = Promise<number>

type InferredType1 = Awaittable<PromiseNumber>

type InferredType2 = Awaited<PromiseNumber> // basic

type PromisePromiseNumber = Promise<Promise<number>>
type Number1 = Awaited<PromisePromiseNumber>
type Awaittable2<T> = T extends Promise<infer K> ? Awaittable2<K> : T //recursion
type Number2 = Awaittable2<PromisePromiseNumber>

//array
type ArraType<T> = T extends Array<infer K> ? K : never

type InferredType3 = ArraType<Array<number | string>>

type InferredType4 = Array<number | string>[number] // basic

//parameters
type InputType<T> = T extends (...param: infer K) => any ? K : never

type Fn1 = (a: number)=> number
type Fn2 = (a: number, b: string)=> boolean

type InferredType5 = InputType<Fn1> // [a: number]

type InferredType6 = InputType<Fn2> // [a: number, b: string]
type InferredType7 = InputType<Fn2>[0] // number
type InfferedType8 = Parameters<Fn2> // basic

//return type
type Return<T> = T extends (...param: any) => infer K ? K : never
type InferredType9 = Return<Fn2> // boolean
type InfferedType10 = ReturnType<Fn2> // boolean