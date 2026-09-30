function fill(data, value, start = 0, end) {
  if (!Array.isArray(data) || value === undefined) return 'Invalid input';

  const actualStart = Math.max(0, start);
  const actualEnd =
    end === undefined ? data.length : Math.min(end, data.length);
  const result = [...data];

  for (let i = actualStart; i < actualEnd; i++) {
    result[i] = value;
  }

  return result;
}

//Test Case
console.log(fill(undefined, 'test'));
// Invalid input
console.log(fill(['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo']));
// Invalid input
console.log(fill(['Alpha', 'Beta', 'Charlie', 'Delta'], 'Echo', 2, 4));
// [ 'Alpha', 'Beta', 'Echo', 'Echo' ]
console.log(fill(['Alpha', 'Beta', 'Charlie', 'Delta'], 'Foxtrot', 1, 3));
// [ 'Alpha', 'Foxtrot', 'Foxtrot', 'Delta' ]
console.log(fill(['Alpha', 'Beta', 'Charlie', 'Delta'], 'Juliett', 3, 20));
// [ 'Alpha', 'Beta', 'Charlie', 'Juliett' ]
console.log(fill(['Alpha', 'Beta', 'Charlie', 'Delta'], 'Golf', 0, 1));
// [ 'Golf', 'Beta', 'Charlie', 'Delta' ]
console.log(fill(['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo'], 'Hotel', 1));
// [ 'Alpha', 'Hotel', 'Hotel', 'Hotel', 'Hotel' ]
console.log(
  fill(['Alpha', 'Beta', 'Charlie', 'Delta', 'Echo', 'Foxtrot'], 'India'),
);
// [ 'India', 'India', 'India', 'India', 'India', 'India' ]

module.exports = fill;

// function fill(data, value, start, end) {
//   // Insert your code here

//   if (!value || !data) return 'Invalid input';

//   if (!start) start = 0;

//   if (!end) end = data.length;

//   const result = [];
//   let i = 0;

//   while (result.length !== data.length) {
//     if (i >= start && i < end) {
//       result[i] = value;
//     } else {
//       result[i] = data[i];
//     }

//     i++;
//   }

//   return result;
// }
