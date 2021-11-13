export interface CalculateRule {
  matches (value: number): boolean
  parse (): string
}


export class fizzRule implements CalculateRule {
  matches(value: number): boolean {
    console.log(value % 3 === 0 || String(value).indexOf('3') >= 0)
    return value % 3 === 0 || String(value).indexOf('3') >= 0
  }

  parse(): string {
    return 'Fizz'
  }
}

export class buzzRule implements CalculateRule {
    matches(value: number): boolean {
      return value % 5 === 0 || String(value).indexOf('5') >= 0
    }

    parse(): string {
      return 'Buzz'
    }
}

export class fizzBuzzRule implements CalculateRule {
  matches(value: number): boolean {
    return value % 3 === 0 && value % 5 === 0
  }

  parse(): string {
    return 'FizzBuzz'
  }
}
