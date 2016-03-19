/// <reference path="../typings/global.d.ts" />

interface HelloWorldProps extends React.Props<any> {
    name: string;
    lastName: string;
    age?: number;
    style: any;
}

class HelloMessage extends React.Component<HelloWorldProps, {}> {
    render() {
        return (
            <div style={this.props.style}>
                <div>Hello {this.props.name} {this.props.lastName}</div>
            </div>
        );
    }
}

var divStyle = {
    color: "blue",
    fontWeight: "bolder"
};

var mountNode = document.getElementById("react");
ReactDOM.render(<HelloMessage style={divStyle} name="John" lastName="Papa" />, mountNode);
