// any unknown never https://mariusschulz.com/blog/the-unknown-type-in-typescript
// key in, keyof, readonly, const
const obj = { prop: 4 }

const typeOfObj = typeof obj
type TypeOfObj = typeof obj

type A = {
  a: number;
  b: string;
}

function fn1(a: A, key: string) {
  return a[key]
}

fn1({a: 1, b: 'hello'}, 'world')



function fn2(a: A, key: keyof A) {
  return a[key]
}

fn2({a: 2, b: 'hello'}, 'a')


function fn3(a: A, key: keyof FilterTypeByValueType<A, string>) {
  return a[key]
}

fn3({a:3, b: 'hello'}, 'b')
// 1.Function name is same
// 2.Number of parameters are different in each overload
// 3.If number of parameters is same the their type must be different
// 4.All overloads must have same return type
function add(first: number, second: number): number;    //Overload signature with two parameters
function add(first: number, second: number, third:number): number;  //Overload signature with three parameters
function add(first: number, second: number, third: string): number
function add(first: number, second: number, third?: number | string, fourth?: number): number {  //Implementation signature
  if (first !== undefined && second !== undefined && third !== undefined) {
    return first + second + Number(third);
  } else {
    return first + second;
  }
}

const r1 = add(1, 2, 3);
const r2 = add(1, 2);
const r3 = add(1, 2, 3, 4); // error

//Union Meal|Note - if meal - do something
type Meal = { meal: string }
type Note = { note: string }
type Activity = { activity: string }
type Events = Meal | Note

function processEvents(meal: Meal): void;
function processEvents(note: Note): void;
function processEvents(event: Events): void {
  console.log(event)
}

processEvents({ meal: 'Meat' })
processEvents({ note: 'Hello' })
processEvents({ activity: 'Running' }) // error