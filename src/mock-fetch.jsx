const articles = [
  { id: 0, title: 'The JavaScript framework war is over', category: 'Reactjs' },
  {
    id: 1,
    title: 'If You Want To Fall In Love With Mathematics, Read This Book',
    category: 'Math',
  },
  {
    id: 2,
    title: 'Is being competitive useful?',
    category: 'Mental Health',
  },
  {
    id: 3,
    title: '7 Habits That Constantly Drain Your Energy (And How To Fix It)',
    category: 'Health',
  },
];

const data = {
  '/articles': articles,
};

function delay(val) {
  return new Promise((res, rej) => {
    setTimeout(val ? res : rej, 1000, val);
  });
}
function mockFetch(url) {
  const payload = data[url];
  return delay(payload);
}

export default mockFetch;
