export const resourceTitleComparator = (r1, r2) => {
  const t1 = r1.title.toUpperCase();
  const t2 = r2.title.toUpperCase();
  return t1 < t2 ? -1 : t1 > t2 ? 1 : 0;
}

export const openInNewWindow = (url) => {
  // https://stackoverflow.com/a/63627688/2302482
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
}