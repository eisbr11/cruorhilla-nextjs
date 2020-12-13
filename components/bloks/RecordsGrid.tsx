import Link from 'next/link';

const RecordsGrid = ({ records }: {records: any}) => (
  <div>
    {records.map((record) => (
      <Link href={`/diskografie/${record.slug}`} key={record.id}>
        <a>
          <img width="200" src={record.content.coverImage.filename} alt={record.content.coverImage.alt} />
          {record.content.name}
        </a>
      </Link>
    ))}
  </div>
);

export default RecordsGrid;
