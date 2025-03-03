// Import React and hooks needed for state and lifecycle
import React, { useState, useEffect } from 'react';
// Import axios to make HTTP requests
import axios from 'axios';

//create the Comments component
const Comments = ({ songId }) => {
  //stateto hold the list of comments from the server
  const [comments, setComments] = useState([]);
  // state o hold the new comment input from the user
  const [newComment, setNewComment] = useState('');

  //fetch comments when the component loads or when the songId changes
  useEffect(() => {
    //trequest comments for the specific song
    axios.get(`/api/comments/${songId}`) 
      .then(response => {
        //update comments state with the data received
        setComments(response.data); 
      })
      .catch(error => console.error('Error fetching comments:', error));
  }, [songId]);

  //handle form submission to add a new comment
  const handleSubmit = (eventt) => {
    //prevent default form page refresh
    // eventt.preventDefault();

    axios.post('/api/comments', {
      // user data should be unique
      username: 'Anonymous',
      //the actual comment text
      content: newComment,
      //the ID of the song this comment belongs to
      songId: songId
    })
    .then(response => {
      //add new comment to the list
      setComments([...comments, response.data]);
      //clear input field after submitting
      setNewComment('');
    })
    .catch(error => console.error('Error adding comment:', error));
  };

  return (
    <div className="comments-section">
      <h3>Comments</h3>

      {/* List of comments */}
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <strong>{comment.username}:</strong> {comment.content}
          </li>
        ))}
      </ul>

      {/* Form to add a new comment */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          //update state as user types
          onChange={(e) => setNewComment(e.target.value)} 
          required
        />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
};

export default Comments;
