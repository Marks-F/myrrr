class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  toString(mixed = false) {
    if (mixed) {
      if (this.denominator != 0) {
        const whole = Math.floor(this.numerator / this.denominator);
        const numerator = this.numerator % this.denominator;
        return `${whole} ${numerator}/${this.denominator}`;
      }
    }
    return `${this.numerator}/${this.denominator}`;
  }
  copy() {
    // return new object with the same num & denum
    const m = new Fraction(this.numerator, this.denominator);
    return m;
  }

  mul(otherFraction) {
    return new Fraction(
      this.numerator * otherFraction.numerator,
      this.denominator * otherFraction.denominator
    );
  }
  div(other) {
    // Very half baked. Should probably have a way to simplify the resulting fraction. 10/5 -> 2/1
    return new Fraction(
      this.numerator * other.denominator,
      this.denominator * other.numerator
    );
  }
  add(otherFraction){
      const sumDenominator = this.denominator * otherFraction.denominator;
      const sumNominator = this.numerator * otherFraction.denominator + otherFraction.numerator*this.denominator;
      return new Fraction (sumNominator, sumDenominator);
  }

  simplify() {
    // Example: 8/20 -> 2/5
    const d = gcd(this.numerator, this.denominator);
    this.numerator /= d;
    this.denominator /= d;
  }
}

function gcd(a, b) {
  while (a != b) { 
    if (a > b)
      a = a - b;
    else
      b = b - a;
  }
  return a;
}

const f = new Fraction(4, 3);
const a = f.copy();
const d = new Fraction(2, 4);
console.log(`f = ${f}`);
d.simplify();
console.log(`d = ${d}`);
//console.log(`${f.toString(true)}`);

console.log(`f*d = ${f.mul(d)}`);
console.log(`a (f copy) = ${a}`);
console.log(`f/d = ${f.div(d)}`);
console.log(`f+d = ${f.add(d)}`);
