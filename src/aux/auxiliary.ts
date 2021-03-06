export function dedup(array: string[]): string[] {
  const uniq = array.filter((x, i, self) => {
    return self.indexOf(x) === i;
  });
  return uniq;
}

export function sortByValue(array: string[]): string[] {
  return array.sort();
}

export function clean(s: string): string {
  return s
    .replace(/(\[|\(|\{)\.(\]|\)|\})/gi, ".")
    .replace(/(\[|\(|\{)\./gi, ".")
    .replace(/\.(\]|\)|\})/gi, ".")
    .replace(/\[:\]/gi, ":")
    .replace(/\\\./gi, ".")
    .replace(/\[\/\]/gi, "/")
    .replace(/hxxp(s?):\/\//gi, "http$1://")
    .replace(/(\[|\(|\{)(at|@)(\]|\)|\})/gi, "@")
    .replace(/(\[|\(|\{)dot(\]|\)|\})/gi, ".");
}
