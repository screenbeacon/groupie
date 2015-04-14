class Groupie {
  constructor() {}

  groupBy(baseArray, f) {
    let groups = [];

    baseArray.forEach(function(o) {
      var group = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });

    return Object.keys(groups).map(function(group) {
      return groups[group];
    });
  }

}