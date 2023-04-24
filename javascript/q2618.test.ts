// Write a function that checks if a given object is an instance of a given
// class or superclass.

// There are no constraints on the data types that can be passed to the
// function.

/** Result: 40% runtime, 20% memory
 * 
 * if(obj === null || obj === undefined || typeof classFunction !== 'function') return false;
 * return Object(obj) instanceof classFunction;
 * no recursion or while loops necessary. 
 */ 

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
  if (obj == null) return false
  if (obj.constructor === classFunction) return true

  return checkIfInstanceOf(Object.getPrototypeOf(obj), classFunction)
}

describe('q2618', () => {
  test('should return true as date constructor is instance of date', () => {
    expect(checkIfInstanceOf(new Date(), Date)).toBe(true)
  })
  test('should return true as dog is subclass of animal ', () => {
    class Animal {}
    class Dog extends Animal {}
    expect(checkIfInstanceOf(new Dog(), Animal)).toBe(true)
  })
  test('should return false as date cannot instance itself', () => {
    expect(checkIfInstanceOf(Date, Date)).toBe(false)
  })
  test('should return true as 5 is a number', () => {
    expect(checkIfInstanceOf(5, Number)).toBe(true)
  })
  // failed runs
  test('should return false for null', () => {
    expect(checkIfInstanceOf(null, null)).toBe(false)
  })
  test('should return false for undefined', () => {
    expect(checkIfInstanceOf(undefined, null)).toBe(false)
  })
  test('should return true falsy value check', () => {
    expect(checkIfInstanceOf(0, Object)).toBe(true)
  })
  test('should return true', () => {
    class C0 extends Object {}
    class C1 extends C0 {}
    class C2 extends C1 {}
    class C3 extends C2 {}
    class C4 extends C3 {}
    class C5 extends C4 {}
    class C6 extends C5 {}
    class C7 extends C6 {}
    class C8 extends C7 {}
    class C9 extends C8 {}
    expect(checkIfInstanceOf(new C9(), C0)).toBe(true)
  })
})
