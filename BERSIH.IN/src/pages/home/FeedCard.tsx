interface FeedProps {
  feed: {
    id: number;
    author: string;
    title: string;
    description: string;
    image?: string;
  };
}

export function FeedCard({ feed }: FeedProps) {
  return (
    <div className="bg-white rounded-2xl shadow p-3 space-y-2">
      {feed.image && (
        <img
          src={feed.image}
          alt={feed.title}
          className="w-full h-40 object-cover rounded-lg"
        />
      )}
      <h2 className="text-lg font-semibold">{feed.title}</h2>
      <p className="text-sm text-gray-500">{feed.description}</p>
      <p className="text-xs text-gray-400 text-right">
        oleh {feed.author}
      </p>
    </div>
  );
}
