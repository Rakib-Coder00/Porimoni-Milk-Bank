const loginBtn = document.getElementById('loginBtn')
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area')
    loginArea.style.display = 'none'
    const tractionArea = document.getElementById('transaction-area')
    tractionArea.style.display = 'block'
})



// Balance  section=============
const depositBtn = document.getElementById('addDeposit')
depositBtn.addEventListener('click', function () {
    // const depositAmount = document.getElementById('depositAmount').value
    // const amountNumber = parseFloat(depositAmount)
    const amountNumber = valueId('depositAmount')

    // Deposit Balance =========
    // const currentDeposit = document.getElementById('currentDeposit').innerText
    // const currentDepositNumber = parseFloat(currentDeposit)
    // const totalDeposit = amountNumber + currentDepositNumber
    // document.getElementById('currentDeposit').innerText = totalDeposit

    updateSpan('currentDeposit', amountNumber)

    // Total Balance  =======
    
    // const currentBalance = document.getElementById('currentBalance').innerText
    // const currentBalanceNumber = parseFloat(currentBalance)
    // const totalBalance = amountNumber + currentBalanceNumber
    // document.getElementById('currentBalance').innerText = totalBalance
    updateSpan('currentBalance', amountNumber)


    document.getElementById('depositAmount').value = ''
})


function updateSpan(id, amountNumber) {
    const Balance = document.getElementById(id).innerText
    const BalanceNumber = parseFloat(Balance)
    const total = amountNumber + BalanceNumber
    document.getElementById(id).innerText = total
}


    // Withdraw Balance =======


const withdrawBtn = document.getElementById('withdrawBtn')
withdrawBtn.addEventListener('click', function () {
    // const withdrawAmount = document.getElementById('withdrawAmount').value
    // const amountNumber = parseFloat(withdrawAmount )
    const amountNumber = valueId('withdrawAmount')


    // const withdrawBalance = document.getElementById('withdrawBalance').innerText
    // const withdrawNumber = parseFloat(withdrawBalance)
    // const totalWithdraw = amountNumber +  withdrawNumber
    // document.getElementById('withdrawBalance').innerText = totalWithdraw 
    input('withdrawBalance', amountNumber)



    document.getElementById('withdrawAmount').value = ''

    // const currentBalance = document.getElementById('currentBalance').innerText
    // const currentBalanceNumber = parseFloat(currentBalance)
    // const totalBalance = currentBalanceNumber - amountNumber
    // document.getElementById('currentBalance').innerText = totalBalance

    input('currentBalance', -1 * amountNumber)

})

function input(id, amountNumber) {
    const currentBalance = document.getElementById(id).innerText
    const currentBalanceNumber = parseFloat(currentBalance)
    const totalBalance = currentBalanceNumber + amountNumber
    document.getElementById(id).innerText = totalBalance
}

function valueId(id) {
    const depositAmount = document.getElementById(id).value
    const Amount = parseFloat(depositAmount)
    return Amount
}