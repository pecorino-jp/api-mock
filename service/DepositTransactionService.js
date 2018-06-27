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

