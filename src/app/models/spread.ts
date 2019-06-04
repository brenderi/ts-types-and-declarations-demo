export function getSpread() {

  interface MediaFile {
    id: string;
    title: string;
    size: string;
    length?: string;
    tags?: string[]
  }

  const myMediaFile: MediaFile = {
    id: '7f0',
    title: 'bike-taxi',
    size: '4 MB',
    //length: 'PT10S',
    tags: [
      'summer',
      'downtown',
      'events'
    ]
  };

  const updatedMediaFile = { ...myMediaFile, tags: ['one', 'two', 'three'] };

  return [
    ...myMediaFile.tags,
    //updatedMediaFile.id,
    //...updatedMediaFile.tags
  ];
}