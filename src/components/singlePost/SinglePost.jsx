import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
    <div className="singlePostWrapper">
    <img
    className="singlePostImg"
    src="https://images.unsplash.com/photo-1557231146-afde25e6598f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    alt=""
    />
    <h1 className="singlePostTitle">
    Lorem ipsum dolor sit amet.
    <div className="singlePostEdit">
    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
    <i className="singlePostIcon fa-regular fa-trash-can"></i>
      </div>
    </h1>
    <div className="singlePostInfo">
    <span className="singlePostAuthor">Author: <b>Raj</b></span>
    <span className="singlePostDate">1 hour ago </span>
    </div>
    <p className="singlePostDesc">
    There are many variations of passages of Lorem Ipsum available,  
    but the majority have suffered alteration in some form,
     by injected humour, or randomised words which don't look 
     even slightly believable.
    There are many variations of passages of Lorem Ipsum available,  
    but the majority have suffered alteration in some form,
     by injected humour, or randomised words which don't look 
     even slightly believable.
    There are many variations of passages of Lorem Ipsum available,  
    but the majority have suffered alteration in some form,
     by injected humour, or randomised words which don't look 
     even slightly believable.
    There are many variations of passages of Lorem Ipsum available,  
    but the majority have suffered alteration in some form,
     by injected humour, or randomised words which don't look 
     even slightly believable.
    There are many variations of passages of Lorem Ipsum available,  
    but the majority have suffered alteration in some form,
     by injected humour, or randomised words which don't look 
     even slightly believable.
    There are many variations of passages of Lorem Ipsum available,  
    but the majority have suffered alteration in some form,
     by injected humour, or randomised words which don't look 
     even slightly believable.
    </p>
    </div>
    </div>
  )
}
