import React , {Component} from "react";
import Main from "../Main";
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: 'usuarios',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
}

const baseUrl = 'http://localhost:3001/users' 
const initialState = {
    user: { name: '' , email: ''},
    list: []
}

export default class UserCrud extends Component {
 
    state = { ...initialState}

    componentWillMount(){
        axios(baseUrl).then(resp => { 
            this.setState({ list: resp.data})
         })
    }


    clear(){
        this.setState({ user: initialState.user})
    }

    save(){
        const user = this.state.user
        const method = user.id ? 'put': 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user)
        .then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({ user: initialState.user, list })
        })
    }

    getUpdatedList(user ,  add = true){
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add ) list.unshift(user)
        return list
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})

    }


    renderForm(){
        return(
            <div className="form">
              <div className="row">
                  <div className="col-12 col-md-6">
                        <div className="form-group">
                            
                            <label > Nome </label>
                            <input 
                                type="text" 
                                 className="form-control"
                                name="name" 
                               value={ this.state.user.name}
                                onChange={event => this.updateField(event)}
                                placeholder="digite nome"
                          
                            /> 

                        </div>

                        <div className="col-12 col-md-6">
                           <div className="form-group">
                            <label > Email  </label>
                            <input 
                                type="text" 
                                className="form-control"
                                name="email" 
                             value={ this.state.user.email }
                                onChange={event => this.updateField(event)}
                                placeholder="digite email"
                            />
                            </div> 
                        </div>
                        
                        <hr/>

                        <div className="row">
                            
                             <div className="col-12 d-flex justify-content-end">
                                 <button className="btn btn-primary" onClick={event => this.save(event)} >
                            salvar
                            </button>
                         

                                <button className="btn btn-secondary ml-2"
                                onClick={event => this.clear(event)}>
                                    cancelar
                                </button>
                        
                            </div>
                        </div>

                    </div>
                </div> 
                
            </div>
        )
    }


    
    load(user){
        this.setState({ user})
    }

    remove(user){
        axios.delete( `${ baseUrl}/${user.id}`).then(response => {
            const list = this.getUpdatedList(user , false )
             this.setState({ list })
        })
    }

 //this.state.list.filter( u => u !== user)
           
    renderTable(){
        return(
            <table className="table mt-4">
                <thread>
                    <tr>
                        <th> id</th>
                        <th> nome</th>
                        <th> email</th>
                        <th> açoes</th>
                    </tr>
                </thread>
    
                <tbody>
                    {this.renderRows()}
                </tbody>
            
            </table>
        )
    }
    renderRows(){
        return this.state.list.map(user =>{
            return (
                <tr key={user.id}>
                            <td> {user.id} </td>
                    <td> {user.name} </td>
                    <td> {user.email} </td>
                    
                    <td>  
                     <button className="btn btn-warning"
                     onClick={() => this.load(user)}>
                         <i className="fa fa-pencil"></i>
                        </button>
                    
                        
                        <button className="btn btn-danger ml-2"
                             onClick={() => this.remove(user)}>
                         <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }





















    render() {

        return (
            <Main {...headerProps}>
                {this.renderForm()} 
                {this.renderTable()} 
            </Main>
        )
    }
   
}