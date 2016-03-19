/// <reference path="../typings/global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// https://facebook.github.io/react/
var Item = (function () {
    function Item() {
    }
    return Item;
}());
var TodoList = (function (_super) {
    __extends(TodoList, _super);
    function TodoList() {
        _super.apply(this, arguments);
    }
    TodoList.prototype.createItem = function (item) {
        return (React.createElement("li", {key: item.key}, item.text));
    };
    TodoList.prototype.render = function () {
        return (React.createElement("ul", null, this.props.items.map(this.createItem)));
    };
    return TodoList;
}(React.Component));
var TodoApp = (function (_super) {
    __extends(TodoApp, _super);
    function TodoApp(props) {
        _super.call(this, props);
        this.state = {
            text: "",
            items: [{ text: "Hello, world 1" }, { text: "Hello, world 2" }]
        };
    }
    TodoApp.prototype.handleSubmit = function (e) {
        e.preventDefault();
        var newItem = [{ text: this.state.text, id: Date.now() }];
        var nextItems = this.state.items.concat(newItem);
        var nextText = "";
        this.setState({ items: nextItems, text: nextText });
    };
    TodoApp.prototype.onChange = function (e) {
        console.log(this.state);
        this.setState({ text: e.target.value, items: this.state.items });
    };
    TodoApp.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null, 
            React.createElement("h3", null, "TODO"), 
            React.createElement(TodoList, {items: this.state.items}), 
            React.createElement("form", {onSubmit: function (e) { return _this.handleSubmit(e); }}, 
                React.createElement("input", {onChange: function (e) { return _this.onChange(e); }, value: this.state.text}), 
                React.createElement("button", null, "Add #" + (this.state.items.length + 1)))));
    };
    return TodoApp;
}(React.Component));
ReactDOM.render(React.createElement(TodoApp, null), document.getElementById("react"));
//# sourceMappingURL=todo.js.map