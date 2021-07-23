export default function ListPost({ posts }) {
  return (
    <div className="post">
      <img src={posts.foto} alt={posts.title} />
      <div className="post-content">
       <h2> {posts.title} </h2>
        <p> {posts.id} </p>
        <p> {posts.userId} </p>
        <p> {posts.body}</p>
      </div>
    </div>
  );
}
