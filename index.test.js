const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: ' bar', baz: 'baz   ' }
    const output = utils.trimProperties(input)
    expect(output).not.toBe(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: ' bar', baz: 'baz   '}
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const output = utils.trimPropertiesMutation(input)
    expect(output).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: ' bar', baz: 'baz   ' }
    const output = utils.trimPropertiesMutation(input)
    expect(output).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    let array = [{ integer: 2 }, { integer: 8 }, { integer: 1 }, { integer: 5 }, { integer: 3 }]
    let output = utils.findLargestInteger(array)
    expect(output).toBe(8)

    array = [{ integer: -3 }, { integer: -5 }, { integer: 0 }]
    output = utils.findLargestInteger(array)
    expect(output).toBe(0)
    
    array = [{ integer: -2 }, { integer: 3 }, { integer: -9 }, { integer: 12 }]
    output = utils.findLargestInteger(array)
    expect(output).toBe(12)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  const initialNumber = 3
  beforeEach(() => {
    counter = new utils.Counter(initialNumber) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const count = counter.countDown() // 3
    expect(count).toEqual(initialNumber)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown() // 3
    const count = counter.countDown() // 2
    expect(count).toEqual(initialNumber - 1) // 3 - 1 = 2
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    for (let i = 0; i < initialNumber; i++) {
      counter.countDown()
    }
    let count = counter.countDown() // 0
    expect(count).toEqual(0)
    count = counter.countDown() // 0
    expect(count).toEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test.todo('[9] the FIRST call of seasons.next returns "summer"')
  test.todo('[10] the SECOND call of seasons.next returns "fall"')
  test.todo('[11] the THIRD call of seasons.next returns "winter"')
  test.todo('[12] the FOURTH call of seasons.next returns "spring"')
  test.todo('[13] the FIFTH call of seasons.next returns again "summer"')
  test.todo('[14] the 40th call of seasons.next returns "spring"')
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test.todo('[15] driving the car returns the updated odometer')
  test.todo('[16] driving the car uses gas')
  test.todo('[17] refueling allows to keep driving')
  test.todo('[18] adding fuel to a full tank has no effect')
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test.todo('[19] resolves true if passed an even number')
  test.todo('[20] resolves false if passed an odd number')
  test.todo('[21] rejects an error with the message "number must be a number" if passed a non-number type')
  test.todo('[22] rejects an error with the message "number must be a number" if passed NaN')
})
