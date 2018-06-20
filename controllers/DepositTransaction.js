'use strict';

var utils = require('../utils/writer.js');
var DepositTransaction = require('../service/DepositTransactionService');

module.exports.cancelDepositTransaction = function cancelDepositTransaction (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  DepositTransaction.cancelDepositTransaction(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmDepositTransaction = function confirmDepositTransaction (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  DepositTransaction.confirmDepositTransaction(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startDepositTransaction = function startDepositTransaction (req, res, next) {
  DepositTransaction.startDepositTransaction()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
