module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement >= 20) {
    return item;
  }
  const updatedEnhancement = item.enhancement + 1;
  return { ...item, enhancement: updatedEnhancement };
}

function fail(item) {
  if (item.enhancement > 16) {
    item.enhancement = item.enhancement - 1;
  }
  if (item.enhancement < 15) {
    item.durability = item.durability + 5;
    return { ...item };
  } else if (item.enhancement >= 15) {
    item.durability = item.durability + 10;
  }
  return { ...item };
}

function repair(item) {
  if (typeof item !== "object") {
    throw new Error("Item must be an object");
  }
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}