let proverbs = [
  '좌절감으로 배움을 늦추지 마라',
  'Stay hungry, Stay foolish',
  'Memento Mori',
  'Carpe diem',
  '배움에는 끝이 없다',
];

export default function getProverbs(filterBy = '') {
  console.log(filterBy);
  return proverbs.filter((pr) =>
    pr.toLowerCase().includes(filterBy.toLocaleLowerCase())
  );
}
