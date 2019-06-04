export function getObjectDestructuring() {

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
    length: 'PT10S',
    tags: [
      'summer',
      'downtown',
      'events'
    ]
  };

  let { title, size: fileSize } = myMediaFile;

  function processMediaFile(mediaFile: MediaFile) {
    let { id, length = 'still' } = mediaFile;
    return [id, length];
  }

  return [
    title,
    fileSize,
    //processMediaFile(myMediaFile)
  ];
}