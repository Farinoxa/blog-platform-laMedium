import reactRacePic from './assets/reactRacePic.jfif';
import angularNewsPic1 from './assets/angularNewsPic1.png';
import math from './assets/math.jpg';
import competitive from './assets/competitive.jpeg';
import badHabits from './assets/badHabits.jpeg';

const articles = [
  {
    userName: 'David Rodenas',
    userAvatar: angularNewsPic1,
    title: 'The JavaScript framework war is over',
    category: 'Reactjs',
    newsPicture: reactRacePic,
    description:
      'And there is only one winner. — Contestants The war among frameworks is a hot topic in the JavaScript community, and it is one of many holy wars in the profession. Since the beginning, with jQuery, followed by AngularJS...',
  },
  {
    userName: 'Prince Verma',
    userAvatar: reactRacePic,
    title: 'If You Want To Fall In Love With Mathematics, Read This Book',
    category: 'Math',
    newsPicture: math,
    description:
      'Mathematics reveals the mysteries of the world — Ever since I was a kid, I loved mathematics. I loved playing with numbers as a kid. I used to...',
  },
  {
    userName: 'Coin Analytics',
    userAvatar: angularNewsPic1,
    title: 'Is being competitive useful?',
    category: 'Mental Health',
    newsPicture: competitive,
    description:
      'In this day and age with identity politics being dominant in media most will say “absolutely not ” and will state that society is unfair and you shouldn’t judge someone’s success on others. However on the other hand those sa...',
  },
  {
    userName: 'Victor Mong',
    userAvatar: angularNewsPic1,
    title: '7 Habits That Constantly Drain Your Energy (And How To Fix It)',
    category: 'Health',
    newsPicture: badHabits,
    description:
      'It is surprisingly your daily habits that have the most impact on your energy, making you tired and less productive — Energy is the ability to do...',
  },
];

const data = {
  '/articles': articles,
};

function delay(val) {
  return new Promise((res, rej) => {
    setTimeout(val ? res : rej, 2000, val);
  });
}
function mockFetch(url) {
  const payload = data[url];
  return delay(payload);
}

export default mockFetch;
