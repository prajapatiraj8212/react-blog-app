import "./post.css"

export default function Post() {
  return (
    <div className="post">
    <img
    className="postImg"
    src="https://cdn.pixabay.com/photo/2023/06/21/10/39/flower-8079026_640.png"
    alt=""
    />
    <div className="postInfo">
    <div className="postCats">
    <span className="postCat">Music</span>
    <span className="postCat">Life</span>
    </div>
    <span className="postTitle">
    It is a long established fact that a reader. 
    </span>
    <hr/>
    <span className="postDate"> 1 hour ago</span>
    </div>
    <p className="postDesc">
    There are many variations of passages of Lorem Ipsum available,
     but the majority have suffered alteration in some form, 
     by injected humour,
     or randomised words which don't look even slightly believable
    There are many variations of passages of Lorem Ipsum available,
     but the majority have suffered alteration in some form, 
     by injected humour,
     or randomised words which don't look even slightly believable
    There are many variations of passages of Lorem Ipsum available,
     but the majority have suffered alteration in some form, 
     by injected humour,
     or randomised words which don't look even slightly believable
    </p>
    </div>
  )
}
