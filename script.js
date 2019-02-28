function permut(string) {
  if (string.length < 2) return string;

  let permutations = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (string.indexOf(char) != i) continue;

    let remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

    for (let subPermutation of permut(remainingString)) {
      permutations.push(char + subPermutation)
    }
  }
  return permutations;
}

document.addEventListener('submit', e => {
  e.preventDefault();
  let input = document.getElementById('input');
  let result = document.getElementById('permuts');
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
  let output = permut(input.value);
  if (typeof output == 'string') return;
  output.forEach(str => {
    let node = document.createElement('LI');
    let textnode = document.createTextNode(str);
    node.appendChild(textnode);
    result.appendChild(node);
  });
})
