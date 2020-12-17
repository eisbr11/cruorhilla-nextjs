const getRecordTypeString = (typeEnum: string) => {
  switch (typeEnum) {
    case 'album':
      return 'Album';
    case 'single':
      return 'Single';
    case 'ep':
      return 'EP';
    default:
      return 'n.a.';
  }
};

export default getRecordTypeString;
