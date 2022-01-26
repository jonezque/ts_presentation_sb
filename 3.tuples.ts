// 1. Array and Tuples

const array = [1, 2, 'hello']

type TypeOfArray = typeof array[number] // number | string
type TypeFirstElementOfArray = typeof array[0] // number | string


const tuple1 = [1, 2, 'hello'] as const
const tuple2 = <const>[1, 2, 'hello']

type TypeOfTuple = typeof tuple1[number] // 1 | 2 | 'hello'
type TypeFirstElementOfTuple = typeof tuple1[0] // 1
type TypeSecondElementOfTuple = typeof tuple1[1] // 2
type TypeThirdElementOfTuple = typeof tuple1[2] // 'hello'

type ErrorType<N> = typeof tuple1[N]
type TypeNthElementOfTuple<N> = N extends number ? typeof tuple1[N] : never

type Type0 = TypeNthElementOfTuple<0> // 1
type Type1 = TypeNthElementOfTuple<1> // 2
type Type2 = TypeNthElementOfTuple<2> // 'hello'
type Type3 = TypeNthElementOfTuple<3> // undefined
