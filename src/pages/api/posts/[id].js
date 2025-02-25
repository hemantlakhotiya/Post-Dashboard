
export default async function handler(req, res) {
    const { id } = req.query;
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const postDetails = await postResponse.json();

    const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    const comments = await commentsRes.json();

    res.status(200).json({postDetails, comments});
}
  