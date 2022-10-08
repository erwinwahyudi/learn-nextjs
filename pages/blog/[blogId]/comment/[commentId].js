import { useRouter } from "next/router";

function CommentId() {
  const router = useRouter();
  const { blogId, commentId } = router.query;
  return (
    <div>
      <h1>Page for CommentId</h1>
      <h3>Dynamic Route with nested:</h3>
      {blogId} - {commentId}
    </div>
  );
}

export default CommentId;
