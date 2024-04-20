const marks = process.argv[2];
const dictionary = {
  '12': 200,
  '11': 150,
  '10': 100,
  '9': 50
};

console.log('Marks: ', marks);

const marksArr = marks.split(' ');

const total = marksArr.reduce((acc, m) => {
  acc += !!dictionary[m] ? dictionary[m] : 0;
  return acc;
}, 0);

console.log('Total: ', total);