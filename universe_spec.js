
// // _____UNIVERSE
test('a tick removes all cells from the colony that have less than two neighbors', function () {
  var seedArr = [
  new Cell(1,2),
  new Cell(2,2),
  new Cell(3,2)
  ]
  var universe = new Universe
  var colony = new Colony
  colony.seedMe(seedArr);
  newColony = universe.tick(colony);
  notEqual(newColony.allIds().indexOf("2:2"), -1);
  equal(newColony.allIds().length, 3);
});

test('a tick does not add cells where ther are no neighbors', function () {
  var seedArr = [
  new Cell(1,2),
  new Cell(2,2),
  new Cell(3,2)
  ]
  var universe = new Universe
  var colony = new Colony
  colony.seedMe(seedArr);
  newColony = universe.tick(colony);
  equal(newColony.allIds().indexOf("3:2"), -1);
  equal(newColony.allIds().indexOf("1:2"), -1);
  notEqual(newColony.allIds().indexOf("2:2"), -1);
  equal(newColony.allIds().length, 3);
});

test('a tick reproduces', function () {
  var seedArr = [
  new Cell(1,2),
  new Cell(2,2),
  new Cell(3,2)
  ]
  var universe = new Universe
  var colony = new Colony
  colony.seedMe(seedArr);
  newColony = universe.tick(colony);
  notEqual(newColony.allIds().indexOf("2:1"), -1);
});



// // _____COLONY
test('a colony holds many cells', function () {
  equal(1,1)
});

test('a colony can be seeded by cells', function () {
  var seedArr = [
  new Cell(1,2),
  new Cell(2,2),
  new Cell(3,2)
  ]
  var colony = new Colony;
  colony.seedMe(seedArr);

  notEqual(colony.agar['1:2'], undefined);
});

test('a member cell of a colony can count live neighbors', function (){
  var neighbors = [
  new Cell(1,2),
  new Cell(2,2),
  new Cell(3,2)
  ]
  var colony = new Colony;
  var cell = new Cell(2,3)
  colony.seedMe(neighbors);

  equal(colony.countLiveNeighbors(cell), 3);
});

test('colony can kill starving and overcrowded', function () {
  var seedArr = [
    new Cell(1,2),
    new Cell(2,2),
    new Cell(3,2)
  ]
  var colony = new Colony
  colony.seedMe(seedArr);
  var survive = colony.findSurvivors();
  equal(survive.length, 1);
  equal(survive[0].id, '2:2');
});

test('colony can birth dead cells', function () {
  var seedArr = [
    new Cell(1,2),
    new Cell(2,2),
    new Cell(3,2)
  ]
  var colony = new Colony
  colony.seedMe(seedArr);
  var babies = colony.reproduce();
  var ids = babies.map(function (b) { return b.id })
  equal(babies.length, 2);
  notEqual(ids.indexOf('2:1'), -1)
  notEqual(ids.indexOf('2:3'), -1)
});



// _____CELL
test('a cell has x and y coords', function () {
  var cell = new Cell(1,2);
  equal(cell.x, 1);
  equal(cell.y, 2);
});

test('a cell has an id unique by coords', function () {
  var cell = new Cell(1,2);
  equal(cell.id, '1:2');
});

test('a cell knows a block as a group of would be neighbors', function () {
  var cell = new Cell(1,2);
  equal(cell.block().length, 9);
});


