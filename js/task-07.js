/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
    createTransaction(amount, type) {
        const Transaction = { amount, type };
        // console.log(Transaction);
        return Transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        
        this.balance += amount;
        this.transactions.push(this.createTransaction(amount, 'deposit'));
        //console.log(this.transactions);
        
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
    withdraw(amount) {
        if (amount > this.balance) {
            return console.log('Недостаточно средств');
        }
        this.balance -= amount;
        
        this.transactions.push(this.createTransaction(amount, 'withdraw'));

  },

  /*
   * Метод возвращает текущий баланс
   */
    getBalance() {
        return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
    getTransactionDetails(id) {
        return this.transactions[id - 1];
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
    getTransactionTotal(type) {
        let total = 0;
        for (const trans of this.transactions) {
            if (trans.type === type) {
                total += trans.amount;
          }
            
        }
        return total;
  },
};


//console.log(account.getBalance());
account.deposit(200);
 account.deposit(100);
 account.withdraw(100);
 account.deposit(400);
 account.withdraw(300);

console.log(account.getBalance());
 console.log(account.getTransactionDetails(1));
 console.log(account.getTransactionDetails(3));
 console.log(account.getTransactionDetails(5));
console.table(account.transactions);
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));