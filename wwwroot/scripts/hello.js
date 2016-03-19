/// <reference path="../typings/global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HelloMessage = (function (_super) {
    __extends(HelloMessage, _super);
    function HelloMessage() {
        _super.apply(this, arguments);
    }
    HelloMessage.prototype.render = function () {
        return (React.createElement("div", {style: this.props.style}, 
            React.createElement("div", null, 
                "Hello ", 
                this.props.name, 
                " ", 
                this.props.lastName)
        ));
    };
    return HelloMessage;
}(React.Component));
var divStyle = {
    color: "blue",
    fontWeight: "bolder"
};
var mountNode = document.getElementById("react");
ReactDOM.render(React.createElement(HelloMessage, {style: divStyle, name: "John", lastName: "Papa"}), mountNode);
//# sourceMappingURL=hello.js.map