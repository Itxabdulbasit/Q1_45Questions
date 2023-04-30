const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  let Num: string;
  if (number === 1) {
    Num = '1st';
  } else if (number === 2) {
    Num = '2nd';
  } else if (number === 3) {
    Num = '3rd';
  } else {
    Num = `${number}th`;
  }
  console.log(Num);
}
