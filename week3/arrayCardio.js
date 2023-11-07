// Get your shorts on - this is an array workout!
// ## Array Cardio

// Some initial data we can work with:
// Take some time to analyze the data structure
// Do each objects have the exact same data?
const inventors = [
  {
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955,
    categories: ['man', 'physicist'],
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727,
    categories: ['man', 'mathematician'],
  },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934,
    categories: ['woman', 'physicist'],
  },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  {
    first: 'Katherine',
    last: 'Blodgett',
    year: 1898,
    passed: 1979,
    categories: ['woman', 'physicist'],
  },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  {
    first: 'Lise',
    last: 'Meitner',
    year: 1878,
    passed: 1968,
    categories: ['woman', 'physicist'],
  },
  {
    first: 'Hanna',
    last: 'Hammarström',
    year: 1829,
    passed: 1909,
    categories: ['woman', 'inventor'],
  },
];

// Array.prototype.filter()
// 1. Filter the list of inventors to retrieve only those born between 1500 and 1600
// Expected output: an array containing two inventors: Galileo Galilei and Johannes Kepler
const filteredInventors = inventors.filter(inventor => {
  console.log(inventor);
  return inventor.year > 1500 && inventor.year < 1600;
});
console.table(filteredInventors);
console.table(filteredInventors[0]?.first);
// Array.prototype.filter()
// 2. Filter the list of inventors to retrieve only the ones that have the "mathematician" category
// Expected output: an array containing only one inventor: Isaac Newton
console.log(
  inventors.filter(person => person.categories && person.categories.includes('mathematician')),
);
// Array.prototype.filter()
// 3. Filter the list of inventors to retrieve only the ones with the category === 'physicist' AND 'man'
// Expected output: an array containing only one inventor: Albert Einstein
console.log(
  '3',
  inventors.filter(
    person => person.categories?.includes('physicist') && person.categories?.includes('man'),
  ),
);
// Array.prototype.map()
// 4. Give us an array filled with the inventors first and last names
// Expected output:
// ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Marie Curie", "Johannes Kepler", "Nicolaus Copernicus", "Max Planck", "Katherine Blodgett", "Ada Lovelace", "Sarah E. Goode", …]
console.log(inventors.map(person => `${person.first} ${person.last}`));
// Array.prototype.map()
// 5. Give us an array filled only with the inventors emails
// the emails should be lowercase firstName + date of birth @ inventor.com
// Expected output:
// eg: ["albert1879@inventor.com", "isaac1643@inventor.com", "galileo1564@inventor.com", "marie1867@inventor.com", "johannes1571@inventor.com", "nicolaus1473@inventor.com", "max1858@inventor.com", "katherine1898@inventor.com", "ada1815@inventor.com", "sarah e.1855@inventor.com", …]
console.log(inventors.map(person => `${person.first.toLowerCase()}${person.year}@inverntor.com`));
// Array.prototype.sort()
// 6. Sort the inventors by birthdate, youngest to oldest (eg: the one whose birth year is closer to us on top)
// Expected output: an array of inventors going from "Katherine Blodgett" -> to "Nicolaus Copernicus"
console.log(inventors.sort((personA, personB) => personB.year - personA.year));
// Array.prototype.reduce()
// 7. How many years did all the inventors live all together?
console.log(
  inventors.reduce((acc, currentPerson) => {
    acc += currentPerson.passed - currentPerson.year;
    return acc;
  }, 0),
);
// Array.prototype.sort()
// 8. Sort the inventors by years lived
console.log(
  inventors.sort((personA, personB) => {
    let first = personA.passed - personA.year;
    let second = personB.passed - personB.year;
    // return first - second;
    return second - first;
  }),
);
// Array.prototype.filter()
// 9. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevardsInParis = [
  'Boulevard Auguste-Blanqui',
  'Boulevard Barbès',
  'Boulevard Beaumarchais',
  "Boulevard de l'Amiral-Bruix",
  'Boulevard Mortier',
  'Boulevard Poniatowski',
  'Boulevard Soult',
  'Boulevard des Capucines',
  'Boulevard de la Chapelle',
  'Boulevard de Clichy',
  'Boulevard du Crime',
  "Boulevard du Général-d'Armée-Jean-Simon",
  'Boulevard Haussmann',
  "Boulevard de l'Hôpital",
  'Boulevard des Italiens',
  'Boulevard Lefebvre',
  'Boulevard de la Madeleine',
  'Boulevard de Magenta',
  'Boulevard Malesherbes',
  'Boulevard Marguerite-de-Rochechouart',
  'Boulevard Montmartre',
  'Boulevard du Montparnasse',
  'Boulevard Raspail',
  'Boulevard Richard-Lenoir',
  'Boulevard Saint-Germain',
  'Boulevard Saint-Michel',
  'Boulevard de Sébastopol',
  'Boulevard de Strasbourg',
  'Boulevard du Temple',
  'Boulevard Voltaire',
  'Boulevard de la Zone',
];

console.log(boulevardsInParis.filter(ele => ele.split(' ').includes('de')));
// Array.prototype.sort()
// 10. Sort the people alphabetically by last name

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];
// console.table(people.sort());
console.table(
  people.sort((a, b) => {
    const lastA = a.split(',')[0];
    const lastB = b.split(',')[0];
    return lastA.localeCompare(lastB);
  }),
);
// Array.prototype.reduce()
// 11. Sum up the instances of each of these vehicles
// (eg: how many times each vehicle appears in the array)

const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
  'skateboard',
];
// console.log(
//   data.reduce((acc, currentValue) => {
//     if (
//       currentValue.toLowerCase() !== 'bike' &&
//       currentValue.toLowerCase() !== 'skateboard' &&
//       currentValue.toLowerCase() !== 'walk'
//     ) {
//       acc += 1;
//     }
//     return acc;
//   }, 0),
// );
console.log(
  data.reduce((acc, currentValue) => {
    console.log(acc);
    acc[currentValue] = acc[currentValue] ? acc[currentValue] + 1 : 1;
    // if (acc[currentValue]) {
    //   acc[currentValue] += 1;
    // } else {
    //   acc[currentValue] = 1;
    // }
    return acc;
  }, {}),
);
// Array.prototype.some()
// 12. Is at least one person 18 years old?

const family = [
  { name: 'Lily', year: 2009 },
  { name: 'Leah', year: 2011 },
  { name: 'Liv', year: 2000 },
  { name: 'lydia', year: 2015 },
];

console.log(
  family.some(person => {
    const currentYear = new Date().getFullYear();
    return currentYear - person.year >= 18;
  }),
);
// Array.prototype.every
// 13. Do all names of the family members start with the letter L?
console.log(
  family.every(person => {
    console.log(person.name[0]);

    return person.name.startsWith('L');
    // return person.name.toUpperCase().startsWith('L');
  }),
);
