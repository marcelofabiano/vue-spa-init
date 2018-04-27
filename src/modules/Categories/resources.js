import api from '../../init/api'

const Category = {
  list: () => (
    api.get('/categories')
  ),
  find: () => (
    console.log('find')
  ),
  add: () => (
    console.log('add')
  ),
  update: () => (
    console.log('update')
  ),
  delete: () => (
    console.log('delete')
  )
}

export default Category
