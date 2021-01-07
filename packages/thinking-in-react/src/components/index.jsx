import Account from './Account'
import AccountLabel from './AccountLabel'
import AccountInput from './AccountInput'
import AccountSelect from './AccountSelect'
import './index.css'

const TransAccount = Account

TransAccount.Label = AccountLabel
TransAccount.Input = AccountInput
TransAccount.Select = AccountSelect

export default TransAccount