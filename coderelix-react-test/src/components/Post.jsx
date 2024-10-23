
function Post() {
  return (
    <div className="App">
      <header>
        <p>
            Add post
        </p>
      </header>
      <form class="post">
        <label>Blog Link:</label><input type="text" name="blog"></input><br></br>
        <button>Post</button>
      </form>
    </div>
  );
}

export default Post;
