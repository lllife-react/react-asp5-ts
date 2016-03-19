/// <reference path="../typings/global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CommentList = (function (_super) {
    __extends(CommentList, _super);
    function CommentList() {
        _super.apply(this, arguments);
    }
    CommentList.prototype.render = function () {
        return (React.createElement("div", null, "Hello, world! I am a CommentList."));
    };
    return CommentList;
}(React.Component));
var CommentForm = (function (_super) {
    __extends(CommentForm, _super);
    function CommentForm() {
        _super.apply(this, arguments);
    }
    CommentForm.prototype.render = function () {
        return (React.createElement("div", null, "Hello, world! I am CommentForm."));
    };
    ;
    return CommentForm;
}(React.Component));
var CommentBox = (function (_super) {
    __extends(CommentBox, _super);
    function CommentBox() {
        _super.apply(this, arguments);
    }
    CommentBox.prototype.render = function () {
        return (React.createElement("div", null, 
            React.createElement("h1", null, "comments "), 
            React.createElement(CommentList, null), 
            React.createElement(CommentForm, null)));
    };
    return CommentBox;
}(React.Component));
ReactDOM.render(React.createElement(CommentBox, null), document.getElementById("react"));
//# sourceMappingURL=composing.js.map