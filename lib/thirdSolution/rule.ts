export interface Rule {
  matches (value: number): boolean
  parse (): string
}


export class FizzRule implements Rule {
  matches(value: number): boolean {
    return value % 3 === 0 || String(value).indexOf('3') >= 0
  }

  parse(): string {
    return 'Fizz'
  }
}

export class BuzzRule implements Rule {
    matches(value: number): boolean {
      return value % 5 === 0 || String(value).indexOf('5') >= 0
    }

    parse(): string {
      return 'Buzz'
    }
}

export class FizzBuzzRule implements Rule {
  matches(value: number): boolean {
    return value % 3 === 0 && value % 5 === 0
  }

  parse(): string {
    return 'FizzBuzz'
  }
}
