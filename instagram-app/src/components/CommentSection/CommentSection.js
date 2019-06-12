import React from 'react'



class CommentSection extends React.Component {
    state = {
        comments: this.props.comments,
        newComment: ''

    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="comment-section">
             {this.state.comments.map((comment) => {
             return (
                <div className="comment">

                <h3>{comment.username}</h3>
                        
                <p>{comment.text}</p>

                <p className="timestamp">{this.props.timestamp}</p>

                <input type="text" name='newComment' value={this.state.newComment}  placeholder="Add a Comment.." />
                            
                        </div>
                    );
                    
                })
                }
          </div>
        );
    };
}

export default CommentSection;
