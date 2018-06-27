'use strict';


/**
 * 入金取引中止
 * 取引を中止します。すでに確定済の場合、ステータスコード400を返却します。
 *
 * transactionId String 取引ID
 * no response value expected for this operation
 **/
exports.cancelDepositTransaction = function(transactionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 転送取引中止
 * 取引を中止します。すでに確定済の場合、ステータスコード400を返却します。
 *
 * transactionId String 取引ID
 * no response value expected for this operation
 **/
exports.cancelTransferTransaction = function(transactionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 出金取引中止
 * 取引を中止します。すでに確定済の場合、ステータスコード400を返却します。
 *
 * transactionId String 取引ID
 * no response value expected for this operation
 **/
exports.cancelWithdrawTransaction = function(transactionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 口座解約
 * 口座解約
 *
 * accountNumber String 口座番号
 * no response value expected for this operation
 **/
exports.closeAccount = function(accountNumber) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 入金取引確定
 * 取引を確定します。有効期限を超過していた場合、ステータスコード400を返却します。
 *
 * transactionId String 取引ID
 * no response value expected for this operation
 **/
exports.confirmDepositTransaction = function(transactionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 転送取引確定
 * 取引を確定します。有効期限を超過していた場合、ステータスコード400を返却します。
 *
 * transactionId String 取引ID
 * no response value expected for this operation
 **/
exports.confirmTransferTransaction = function(transactionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 出金取引確定
 * 取引を確定します。有効期限を超過していた場合、ステータスコード400を返却します。
 *
 * transactionId String 取引ID
 * no response value expected for this operation
 **/
exports.confirmWithdrawTransaction = function(transactionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 口座開設
 * 口座開設
 *
 * 口座開設設定 OpenAccountParams 口座番号と口座名義を指定します。Pecorinoサービス内(ひとつのPecorinoAPIエンドポイント)でユニークとなるように指定側で管理すること。 重複すればステータスコード409が返されます。
 * returns Account
 **/
exports.openAccount = function(口座開設設定) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "balance" : 0,
  "name" : "name",
  "accountNumber" : "accountNumber",
  "availableBalance" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 口座検索
 * 口座検索
 *
 * returns List
 **/
exports.searchAccounts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "balance" : 0,
  "name" : "name",
  "accountNumber" : "accountNumber",
  "availableBalance" : 6
}, {
  "balance" : 0,
  "name" : "name",
  "accountNumber" : "accountNumber",
  "availableBalance" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 口座取引履歴検索
 * 口座取引履歴検索
 *
 * accountNumber String 口座番号
 * returns List
 **/
exports.searchMoneyTransferActions = function(accountNumber) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : 0,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "purpose" : "{}",
  "id" : "id",
  "fromLocation" : {
    "name" : "name",
    "accountNumber" : "accountNumber",
    "typeOf" : "typeOf"
  },
  "toLocation" : {
    "name" : "name",
    "accountNumber" : "accountNumber",
    "typeOf" : "typeOf"
  },
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "status"
}, {
  "amount" : 0,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "purpose" : "{}",
  "id" : "id",
  "fromLocation" : {
    "name" : "name",
    "accountNumber" : "accountNumber",
    "typeOf" : "typeOf"
  },
  "toLocation" : {
    "name" : "name",
    "accountNumber" : "accountNumber",
    "typeOf" : "typeOf"
  },
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "status"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 入金取引開始
 * 取引を開始します。取引の期限が切れると取引を確定することはできなくなります。 アプリケーション側で十分な期間を想定し、期限をセットしてください。
 *
 * body StartDepositTransactionParams 
 * returns DepositTransaction
 **/
exports.startDepositTransaction = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expires" : "2000-01-23T04:56:07.000+00:00",
  "agent" : {
    "name" : "name",
    "id" : "id",
    "typeOf" : "typeOf",
    "url" : "url"
  },
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "recipient" : {
    "name" : "name",
    "id" : "id",
    "typeOf" : "typeOf",
    "url" : "url"
  },
  "id" : "id",
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 転送取引開始
 * 取引を開始します。取引の期限が切れると取引を確定することはできなくなります。 アプリケーション側で十分な期間を想定し、期限をセットしてください。
 *
 * body StartTransferTransactionParams 
 * returns TransferTransaction
 **/
exports.startTransferTransaction = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expires" : "2000-01-23T04:56:07.000+00:00",
  "agent" : {
    "name" : "name",
    "id" : "id",
    "typeOf" : "typeOf",
    "url" : "url"
  },
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "recipient" : {
    "name" : "name",
    "id" : "id",
    "typeOf" : "typeOf",
    "url" : "url"
  },
  "id" : "id",
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 出金取引開始
 * 取引を開始します。取引の期限が切れると取引を確定することはできなくなります。 アプリケーション側で十分な期間を想定し、期限をセットしてください。
 *
 * body StartWithdrawTransactionParams 
 * returns WithdrawTransaction
 **/
exports.startWithdrawTransaction = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expires" : "2000-01-23T04:56:07.000+00:00",
  "agent" : {
    "name" : "name",
    "id" : "id",
    "typeOf" : "typeOf",
    "url" : "url"
  },
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "recipient" : {
    "name" : "name",
    "id" : "id",
    "typeOf" : "typeOf",
    "url" : "url"
  },
  "id" : "id",
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : { }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

