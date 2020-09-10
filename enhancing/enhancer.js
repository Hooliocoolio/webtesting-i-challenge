module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return item.enhancement === 20 
    ? {...item} : {...item, enhancement : item.enhancement + 1} ;
}

function fail(item) {
  let newObj = {}
  let objDurability = 0;

  if ( item.enhancement < 15 ) {
    item.durability > 0 
    ? objDurability = item.durability - 5 
    : objDurability = 0;
    
    newObj = { ...item, durability : objDurability }
  } else if ( item.enhancement >= 15 ) {
    item.durability > 0 
    ? objDurability = item.durability - 10 
    : objDurability = 0;

    newObj = {...item, durability: objDurability }
    if(item.enhancement > 16){
      newObj = {
        name: item.name,
        durability: objDurability,
        enhancement: item.enhancement - 1 
      }
    }
  }

  return newObj;
}

function repair(item) {
  return {
    name: item.name,
    enhancement: item.enhancement,
    durability: 100
  };
}

function get(item) {
  return { ...item };
}
