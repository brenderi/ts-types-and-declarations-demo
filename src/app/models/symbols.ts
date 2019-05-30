export function getSymbols() {

  let examples: any = [];
  const myTweet = {
    created_at: 'Thu Apr 06 15:24:15 +0000 2017',
    id: 850006245121695744,
    id_str: '850006245121695744',
    text: '1/ Tweet Tweet #bird @redrobin',
    user: {
      id: 2244994945,
      id_str: '2244994945',
      name: '',
      verified: true,
      followers_count: 477684
    },
    entities: {
      hashtags: ['bird'],
      urls: [],
      user_mentions: ['redrobin']
    }
  };

  const isApproved = Symbol('isApproved');
  myTweet[isApproved] = false;
  for (let key in myTweet) {
    examples.push([key]);
  }
  // Object.keys(myTweet).map(key => examples.push([key]));
  // Reflect.ownKeys(myTweet).map(key => examples.push([String(key)]));
  // Object.getOwnPropertyNames(myTweet).map(key => examples.push([String(key)]));
  // Object.getOwnPropertySymbols(myTweet).map(key => examples.push([String(key)]));
  // examples.push([String(myTweet[isApproved])]);
  // myTweet[isApproved] = true;
  // examples.push([String(myTweet[isApproved])]);
  return examples;
  
}