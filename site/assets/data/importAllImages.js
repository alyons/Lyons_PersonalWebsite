function importAllEx(r) {
  let items = {};
  r.keys().map((item, index) => { items[item.replace('./', '')] = r(item); });
  return items;
}

export default importAllEx;
