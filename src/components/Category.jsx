import React, { Component } from 'react'
import {Card,  ListGroup, Alert} from 'react-bootstrap'
import SideCard from './SideCard'
import {FaAngleDown, FaAngleUp } from "react-icons/fa"


export default class Category extends Component {

    state={
        all_users: [],
        display_users: [],
        show_count: 5,
        showMore: false
    }
  
    getUsersProfile = async()=>{
        try{
            let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/",{
                "method": "GET", 
                "headers": new Headers({
                    "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`
                })
            })
            if(response.ok){
                let users = await response.json();
                console.log(users)
                this.setState({users})
                this.showUsers()
            }else{
                <Alert >Opps, an error occured: </Alert>
            }
        }catch(e){
            <Alert >Opps, an error occured:</Alert>
        }  
    }

    

    componentDidMount(){
        console.log('Users has finished mounting')
        this.getUsersProfile()

    }

    componentDidUpdate() {
        if (this.state.showMore) {
            console.log('just entered componentDidUpdate')
            this.showUsers()
            this.setState({showMore: false})    
        }else{

        }
      }

    showUsers = () => {
        this.state.users.length !== 0 && this.setState({display_users: this.state.users.slice(0,this.state.show_count)})
        console.log(this.state.show_count)
    }

    showMoreUsers = () => {
        this.setState(prevState => ({
            show_count: prevState.show_count === 5 ? prevState.show_count + 5 : prevState.show_count,  showMore: !prevState.showMore
            }))
    }


    render() {
        console.log(this.state.users)
        return (
            <Card className="mt-4" style={{ width: '20rem', borderRadius:"12px"}} >
                <Card.Title className="text-left m-0 p-0 pt-4 px-3"> <h2 style={{fontSize:"1em"}}>{this.props.title}</h2></Card.Title>
                <Card.Body className="text-left m-0 p-0  pt-4 px-3">
                    {
                        this.state.display_users.map(user =>  <SideCard imgSrc={user.image} title={user.name + " " + user.surname} description={user.title}  />)
                    }
                </Card.Body>
               
                <ListGroup.Item action className="text-center" onClick ={this.showMoreUsers}>
                   {!this.state.showMore ? (<>Show more <FaAngleDown /></>) : (<>Show less <FaAngleUp /></>) } 
                </ListGroup.Item>
            </Card>
        )
    }
}
