'use strict';

var utils = require('../utils/writer.js');
var Account = require('../service/AccountService');

module.exports.closeAccount = function closeAccount (req, res, next) {
  var accountNumber = req.swagger.params['accountNumber'].value;
  Account.closeAccount(accountNumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.openAccount = function openAccount (req, res, next) {
  var 口座開設設定 = req.swagger.params['口座開設設定'].value;
  Account.openAccount(口座開設設定)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchAccounts = function searchAccounts (req, res, next) {
  Account.searchAccounts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchMoneyTransferActions = function searchMoneyTransferActions (req, res, next) {
  var accountNumber = req.swagger.params['accountNumber'].value;
  Account.searchMoneyTransferActions(accountNumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
