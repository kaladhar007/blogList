// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details
  return (
    <li className="blog-item-page">
      <div className="time_title">
        <h1 className="title">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>

      <p className="description">{description}</p>
    </li>
  )
}
export default BlogItem
