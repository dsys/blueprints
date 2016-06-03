import favicon from 'serve-favicon'
import path from 'path'
export default favicon(path.resolve(__dirname, '../static/favicon.ico'))
