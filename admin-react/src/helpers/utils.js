export function genDate(date) {
  const dt = new Date(date);

  const format = Intl.DateTimeFormat("en-us", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return format.format(dt);
}

export function listGen (item, count, callback)
{
    const list = Array.from({ length: count }, (i) => ({...item,id: i}));
    if (callback) return callback(list);
    return list;
}
