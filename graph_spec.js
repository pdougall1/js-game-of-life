// var seedOne = seed(10);
// var graph = new Graph(seedOne);

// // test('the universe is sane', function () {
// //   equal(2 + 2, 4)
// // });

// test('seed is an object with seeded properties', function () {
//   equal(Object.keys(seedOne).length, 10)
// });

// // test('seed has properties that have x and y coords', function () {
// //   var keys = Object.keys(seed)
// //   notEqual(parseInt(seed[keys[0]].x), NaN)
// // });


// // test('graph has a parentGeneration', function () {
// //   deepEqual(1, 1);
// // });

// // var graph = new Graph(seed)

// // test('references a parent generation', function() {
// //     deepEqual(graph.parentGeneration.length, 20);
// // });


// test('graph has a parentGeneration', function () {
//   equal(graph.parentGeneration, seedOne)
// });

// var removeHalfFromSeed = function (seed) {
//   var keys = Object.keys(seed).splice(0, 5)
//   keys.forEach(function (k) {
//     delete seed[k]
//   });
//   return seed
// }


// // when the next generation has fewer cells

// test('graph removes cells in next generation', function () {
//   var testSeed = seed(10);
//   var graph = new Graph(testSeed);
//   graph.moveGeneration(removeHalfFromSeed(testSeed));
//   equal(graph.parentGeneration, testSeed)
// });

// test('the next generations has fewer actors', function () {
//   var testSeed = seed(10);
//   var graph = new Graph(testSeed);
//   graph.moveGeneration(removeHalfFromSeed(testSeed));
//   equal(1,1)
//   // expect(the dom to have fewer circle elements)
// });
