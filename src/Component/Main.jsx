import ListPost from "./ListPost";

export default function Main({posts}) {
    return (
        <div className="posts">
          {posts.map((x) => (
            <div key={x.id}>
               <ListPost posts={x} />
            </div>
          ))}
        </div>
    )
}
