"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Articles =
/*#__PURE__*/
function () {
  function Articles() {
    _classCallCheck(this, Articles);
  }

  _createClass(Articles, [{
    key: "parseDataToHtmlFragment",
    value: function parseDataToHtmlFragment(data) {
      var _this = this;

      var fragment = document.createDocumentFragment();
      var ul = document.createElement('ul');
      data.forEach(function (item) {
        var li = document.createElement('li');
        li.innerHTML = _this.getArticleTemplate(item);
        ul.appendChild(li);
      });
      fragment.appendChild(ul);
      return fragment;
    }
  }, {
    key: "getArticleTemplate",
    value: function getArticleTemplate(article) {
      return "\n            <div class=\"article-img-container\">\n                <a class=\"article-img-wrapper\" href=\"".concat(article.url, "\">\n                    <img class=\"article-img\" src=\"").concat(article.urlToImage, "\" />\n                    <span class=\"article-description\">").concat(article.description, "</span>\n                </a>\n            </div>\n            <div class=\"article-content-container\">\n                <h3 class=\"article-title\">\n                    <a href=\"").concat(article.url, "\">").concat(article.title, "</a>\n                </h3>\n                <p class=\"article-published\">").concat(article.author, " - ").concat(new Date(article.publishedAt).toLocaleString(), "</p>\n            </div>\n        ");
    }
  }]);

  return Articles;
}();