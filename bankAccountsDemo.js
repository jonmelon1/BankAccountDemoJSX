const bankData = [
    {
        "accountType": "Savings Account",
        "accountHolder": [
            { "name": "James Milner", "dateOfBirth": "04.01.1986"},
        ],
        "currentBalance": [
            { "balance": 100}
        ],
        "transactions": [
            { "type": "Deposit",    "amount":  900 },
            { "type": "Withdrawal", "amount": -400 },
            { "type": "Withdrawal", "amount": -560 },
            { "type": "Deposit",    "amount":  500 },
            { "type": "Withdrawal", "amount": -400 },
            { "type": "Deposit",    "amount": 7000 },
            { "type": "Withdrawal", "amount": -400 },
        ]
    },

    {
        "accountType": "Mortgage",
        "accountHolder": [
            { "name": "James Milner", "dateOfBirth": "04.01.1986"},
        ],
        "currentBalance": [
            { "balance": (-5000000)}
        ],
        "transactions": [
            { "type": "Deposit", "amount": 676 },
            { "type": "Deposit", "amount": 677 },
            { "type": "Deposit", "amount": 670 },
            { "type": "Deposit", "amount": 675 },
            { "type": "Deposit", "amount": 680 },
            { "type": "Deposit", "amount": 678 },
        ]
    },
]
	
const Account = ({ accountType, accountHolder, currentBalance, transactions }) =>

    <fieldset id={accountType}>        
		<legend>{accountType}</legend>
		
		<h4>Account Holder</h4>
		<ul className="holder">
            {accountHolder.map((holder, i) => 
				<p key={i}>{holder.name}, {holder.dateOfBirth}</p>
            )}
        </ul>
		
		<h4>Balance</h4>
		<ul className="balance">
			{currentBalance.map((account, i) =>
				<li key={i}>{account.balance}</li>
			)}
		</ul>

        <h4>Transactions</h4>
		<ul className="transactions">
			{transactions.map((transaction, i) =>
				<li key={i}>{transaction.type} amount: {transaction.amount}</li>
			)}
		</ul>
    </fieldset>

const Bank = ({title, location, accounts}) =>
    <div>
        <header>
            <h1>{title}</h1>
        </header>
        <h2>{location}</h2>
        <div>
            {accounts.map((bank, i) =>
                <Account key={i} {...bank} />
            )}
        </div>
    </div>

ReactDOM.render(
    <Bank accounts={bankData} location="Bjørvika, Oslo" title="DNB Nettbank" />,
    document.getElementById("osl-container")
)
