'use strict';

var utils = require('../utils/writer.js');
var TransferTransaction = require('../service/TransferTransactionService');

module.exports.cancelTransferTransaction = function cancelTransferTransaction (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  TransferTransaction.cancelTransferTransaction(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmTransferTransaction = function confirmTransferTransaction (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  TransferTransaction.confirmTransferTransaction(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startTransferTransaction = function startTransferTransaction (req, res, next) {
  var body = req.swagger.params['body'].value;
  TransferTransaction.startTransferTransaction(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
