'use strict';


/**
 * 口座を解約します。
 * 
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
 * 口座を新しく開設します。
 * 
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
 * 口座を検索します。
 * 
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
 * 口座の取引履歴を検索します。
 * 
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

