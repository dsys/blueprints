import pavlog from 'pavlog'
import rootLog from '../log'
const log = rootLog.child('http')
export default pavlog.middleware(log, 'dev')
