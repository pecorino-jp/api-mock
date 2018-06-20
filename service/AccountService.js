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
  "accountNumber" : "accountNumber"
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
  "accountNumber" : "accountNumber"
}, {
  "accountNumber" : "accountNumber"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

