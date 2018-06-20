'use strict';

var utils = require('../utils/writer.js');
var WithdrawTransaction = require('../service/WithdrawTransactionService');

module.exports.cancelWithdrawTransaction = function cancelWithdrawTransaction (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  WithdrawTransaction.cancelWithdrawTransaction(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmWithdrawTransaction = function confirmWithdrawTransaction (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  WithdrawTransaction.confirmWithdrawTransaction(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startWithdrawTransaction = function startWithdrawTransaction (req, res, next) {
  var body = req.swagger.params['body'].value;
  WithdrawTransaction.startWithdrawTransaction(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
