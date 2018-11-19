"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NewsApi =
/*#__PURE__*/
function () {
  function NewsApi(apiKey, url) {
    _classCallCheck(this, NewsApi);

    this.apiKey = apiKey;
    this.url = url;
  }

  _createClass(NewsApi, [{
    key: "getUrl",
    value: function getUrl(channel, recordCount) {
      return "".concat(this.url, "sources=").concat(channel, "&pageSize=").concat(recordCount, "&apiKey=").concat(this.apiKey);
    }
  }, {
    key: "getData",
    value: function getData(channel, recordCount) {
      var url = this.getUrl(channel, recordCount);
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (result) {
        return result.articles;
      });
    }
  }]);

  return NewsApi;
}();