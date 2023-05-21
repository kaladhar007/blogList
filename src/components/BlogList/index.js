import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul>
      {blogsList.map(obj => (
        <BlogItem key={obj.id} details={obj} />
      ))}
    </ul>
  )
}
export default BlogList
