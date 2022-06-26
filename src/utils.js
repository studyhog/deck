export const resourceTitleComparator = (r1, r2) => {
  const t1 = r1.title.toUpperCase();
  const t2 = r2.title.toUpperCase();
  return t1 < t2 ? -1 : t1 > t2 ? 1 : 0;
}