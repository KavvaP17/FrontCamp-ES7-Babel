"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Main =
/*#__PURE__*/
function () {
  function Main(config) {
    _classCallCheck(this, Main);

    this.selectedChanelIndex = 0;
    this.selectedRecordCountIndex = 0;
    this.channels = config.channels;
    this.recordsCount = config.recordsCount;
    this.searchBtn = document.querySelector('#search-btn');
    this.chanelsSelect = document.querySelector('#chanels-select');
    this.recordsSelect = document.querySelector('#records-count-select');
    this.resultConteiner = document.querySelector('#search-result');
    this.loader = document.querySelector('#loader');
    var apiKey = config.apiKey,
        url = config.url;
    this.api = new NewsApi(apiKey, url);
    this.articles = new Articles();
  }

  _createClass(Main, [{
    key: "init",
    value: function init() {
      this.renderSelect(this.chanelsSelect, this.channels);
      this.renderSelect(this.recordsSelect, this.recordsCount);
      this.searchBtn.addEventListener('click', this.search.bind(this));
      this.chanelsSelect.addEventListener('change', this.updateChanel.bind(this));
      this.recordsSelect.addEventListener('change', this.updateRecordsCount.bind(this));
    }
  }, {
    key: "renderSelect",
    value: function renderSelect(target, data) {
      var fragment = document.createDocumentFragment();
      data.forEach(function (item) {
        var option = document.createElement('option');
        option.setAttribute('value', item.value);
        option.appendChild(document.createTextNode(item.label));
        fragment.appendChild(option);
      });
      target.appendChild(fragment);
    }
  }, {
    key: "search",
    value: function () {
      var _search = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var channel, recordsCount, jsonData, fragment;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.switchLoader();
                channel = this.channels[this.selectedChanelIndex].value;
                recordsCount = this.recordsCount[this.selectedRecordCountIndex].value;
                _context.prev = 3;
                _context.next = 6;
                return this.api.getData(channel, recordsCount);

              case 6:
                jsonData = _context.sent;
                fragment = this.articles.parseDataToHtmlFragment(jsonData);
                this.resultConteiner.innerHTML = "";
                this.resultConteiner.appendChild(fragment);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0.message);

              case 15:
                _context.prev = 15;
                this.switchLoader();
                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 12, 15, 18]]);
      }));

      return function search() {
        return _search.apply(this, arguments);
      };
    }()
  }, {
    key: "switchLoader",
    value: function switchLoader() {
      this.loader.classList.toggle('hidden');
      this.resultConteiner.classList.toggle('hidden');
    }
  }, {
    key: "updateChanel",
    value: function updateChanel(event) {
      this.selectedChanelIndex = event.target.selectedIndex;
    }
  }, {
    key: "updateRecordsCount",
    value: function updateRecordsCount(event) {
      this.selectedRecordCountIndex = event.target.selectedIndex;
    }
  }]);

  return Main;
}();