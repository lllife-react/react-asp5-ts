/// <reference path="../typings/global.d.ts" />


interface CommentFormProps extends React.Props<any> {

}

interface CommentListProps extends React.Props<any> {

}

class CommentList extends React.Component<CommentListProps, {}> {
    render() {
        return (
            <div>
                Hello, world! I am a CommentList.
            </div>
        );
    }
}

class CommentForm extends React.Component<CommentFormProps, {}> {
    render() {
        return (
            <div>
                Hello, world! I am CommentForm.
            </div>
        );
    };
}

class CommentBox extends React.Component<any, {}> {
    render() {
        return (
            <div>
                <h1>comments </h1>
                <CommentList/>
                <CommentForm/>
            </div>
        );
    }
}


ReactDOM.render(<CommentBox/>, document.getElementById("react"));