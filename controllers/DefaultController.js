'use strict';

var utils = require('../utils/writer.js');
var DefaultController = require('../service/DefaultControllerService');

module.exports.cancelDepositTransaction = function cancelDepositTransaction (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  DefaultController.cancelDepositTransaction(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cancelTransferTransaction = function cancelTransferTransaction (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  DefaultController.cancelTransferTransaction(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cancelWithdrawTransaction = function cancelWithdrawTransaction (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  DefaultController.cancelWithdrawTransaction(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.closeAccount = function closeAccount (req, res, next) {
  var accountNumber = req.swagger.params['accountNumber'].value;
  DefaultController.closeAccount(accountNumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmDepositTransaction = function confirmDepositTransaction (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  DefaultController.confirmDepositTransaction(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmTransferTransaction = function confirmTransferTransaction (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  DefaultController.confirmTransferTransaction(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmWithdrawTransaction = function confirmWithdrawTransaction (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  DefaultController.confirmWithdrawTransaction(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.openAccount = function openAccount (req, res, next) {
  var 口座開設設定 = req.swagger.params['口座開設設定'].value;
  DefaultController.openAccount(口座開設設定)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchAccounts = function searchAccounts (req, res, next) {
  DefaultController.searchAccounts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchMoneyTransferActions = function searchMoneyTransferActions (req, res, next) {
  var accountNumber = req.swagger.params['accountNumber'].value;
  DefaultController.searchMoneyTransferActions(accountNumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startDepositTransaction = function startDepositTransaction (req, res, next) {
  var body = req.swagger.params['body'].value;
  DefaultController.startDepositTransaction(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startTransferTransaction = function startTransferTransaction (req, res, next) {
  var body = req.swagger.params['body'].value;
  DefaultController.startTransferTransaction(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.startWithdrawTransaction = function startWithdrawTransaction (req, res, next) {
  var body = req.swagger.params['body'].value;
  DefaultController.startWithdrawTransaction(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
