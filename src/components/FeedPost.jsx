import { Heart, MessageCircle, Bot } from 'lucide-react'

const FeedPost = ({ post }) => {
  return (
    <div className="feed-post">
      <div className="feed-post-header">
        <img src={post.teacher.avatar} alt={post.teacher.name} className="feed-post-avatar" />
        <div className="feed-post-info">
          <h4>{post.teacher.name}</h4>
          <span className="feed-post-subject">{post.subject}</span>
        </div>
      </div>
      
      <div className="feed-post-content">
        <p>{post.content}</p>
      </div>
      
      <div className="feed-post-actions">
        <div className="feed-post-stats">
          <span className="stat-item">
            <Heart size={16} />
            {post.likes}
          </span>
          <span className="stat-item">
            <MessageCircle size={16} />
            {post.comments}
          </span>
        </div>
        <div className="ai-available">
          <Bot size={16} />
          <span>IA Disponível</span>
        </div>
      </div>
    </div>
  )
}

export default FeedPost
