import styles from './sample.css';
import data from './sample.json';

/**
 * Sample code based on Dracula for Atom
 */

export class Raccoon {
  constructor(props) {
    this.hometown = props.hometown;
    this.birthYear = props.birthYear;
    this.currentYear = props.currentYear;
    this.faveBrews = props.faveBrews;
  }

  get age() {
    return this.calcAge();
  }

  calcAge() {
    return this.currentYear - this.birthYear;
  }
}

// A raccoon named Emily

const Emily = new Raccoon({
  hometown: 'San Francisco',
  birthYear: 1994,
  currentYear: 2020,
  faveBrews: ['Hazies', 'Sours']
  bool: [true, false],
  embedded: `${true}`
});
