import React from 'react'



class CommentSection extends React.Component {


    render() {
        return (
            <div className="comment-section">
                {this.props.comments.map((comment) => {
                    return (
                        <div className="comment">

                        <h3>{comment.username}</h3>
                        
                            <p>{comment.text}</p>

                            <p className="timestamp">{this.props.timestamp}</p>
                            
                            <input type="text" placeholder="Add a Comment.." />
                            
                        </div>
                    );
                    
                })
                }
          </div>
        );
    };
}

export default CommentSection;
