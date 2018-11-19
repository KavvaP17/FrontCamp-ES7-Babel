"use strict";

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
    value: function search() {
      var _this = this;

      this.switchLoader();
      var channel = this.channels[this.selectedChanelIndex].value;
      var recordsCount = this.recordsCount[this.selectedRecordCountIndex].value;
      this.api.getData(channel, recordsCount).then(function (jsonData) {
        var fragment = _this.articles.parseDataToHtmlFragment(jsonData);

        _this.resultConteiner.innerHTML = "";

        _this.resultConteiner.appendChild(fragment);

        _this.switchLoader();
      }).catch(function (error) {
        return console.log(error.message);
      });
    }
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