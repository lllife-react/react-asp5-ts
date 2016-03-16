/// <reference path="../typings/global.d.ts" />

interface HelloWorldProps extends React.Props<any> {
    name: string;
}

class HelloMessage extends React.Component<HelloWorldProps, {}> {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}

var mountNode = document.getElementById("react");
ReactDOM.render(<HelloMessage name="John" />, mountNode);
