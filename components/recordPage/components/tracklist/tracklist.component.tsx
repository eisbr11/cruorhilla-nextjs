const Tracklist = ({
  tracklist,
}: {
  tracklist,
}) => {
  if (tracklist && tracklist.length > 0) {
    return (
      <ol>
        {tracklist.map((item) => (
          // eslint-disable-next-line no-underscore-dangle
          <li key={item._uid}>{item.name}</li>
        ))}
      </ol>
    );
  }
  return null;
};

export default Tracklist;
