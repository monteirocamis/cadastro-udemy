import React , {Component} from "react";
import Main from "../Main";

const headerProps = {
    icon: 'users',
    title: 'usuarios',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
}


export default class UserCrud extends Component {
    render() {

        return (
            <Main {...headerProps}>
                cadastro 
            </Main>
        )
    }
   
}