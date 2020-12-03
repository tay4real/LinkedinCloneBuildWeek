import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import './Profile.css';
import { RiArrowDownSFill } from 'react-icons/ri';
import { FaPencilAlt } from 'react-icons/fa';
import {AiFillEye} from 'react-icons/ai';
require('dotenv').config();

export default class ProfileContainer extends Component {

    state={
        user: [],
        profile:[]
    }
    getUserProfile=async()=>{
        let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me",{
            "method": "GET", 
            "headers": new Headers({
                "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`
            })
        })
        let user = await response.json();
        this.setState({user});
    }


    componentDidMount(){
        this.getUserProfile();
    }

    HandleFile = (e) => {
        const formData = new FormData();
        formData.append("profile", e.target.files[0]);
        console.log(process.env.REACT_APP_API_TOKEN)
        console.log(formData);
        this.setState({ profile: formData });
    };
    PostImage = async () => {
        try {
            let response = await fetch(
                `https://striveschool-api.herokuapp.com/api/profile/${process.env.REACT_APP_USER_ID}/picture`,
                {
                    method: "POST",
                    body: this.state.profile,
                    headers: {
                        "Authorization": `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                    },
                }
            );
            if (response.ok) {
                console.log("OK");
                console.log("ueueue", this.state.profile)
                this.getUserProfile()
            } else {
                const error = await response.json();
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    };
    render() {
        return (
          <Card className="card-user-profile">
                <Card.Img variant="top"
                    src="https://media-exp1.licdn.com/dms/image/C4E16AQFGvXwGqrpN7w/profile-displaybackgroundimage-shrink_350_1400/0/1602886552408?e=1612396800&v=beta&t=OgyPkQ41f4wnIJJ0SWmEY4caxBbVbzSd_o0i7MplkFk"
                    className="coverImage image-fluid" />
                 <input
                      type="file"
                      id="profile-pic"
                      onChange={this.HandleFile}
                    />
                <button onClick={this.PostImage}>upload</button>
                <Card.Body>
                    <img src={this.state.user.image ?? "https://media-exp1.licdn.com/dms/image/C4D03AQFQbLFj5Hs2kw/profile-displayphoto-shrink_400_400/0?e=1612396800&v=beta&t=ZqwAjRdb3l6vw76BXdUMU2UT5D-bPni7LqbahbQVVc0"} className="profile-image" />
                    <div className="buttons">
                        <Button className="add-profile-button mr-2">Add profile section <RiArrowDownSFill className="m-0 p-0" style={{ fontSize: "17px" }} /></Button>
                        <Button className="more-button mr-1 py-0">More...</Button>
                        <Button className="pencil-edit-button"><FaPencilAlt /></Button>
                    </div>
                    <Card.Text className=" text-left text-black">
                    <h3>{this.state.user.name ?? "name"} {this.state.user.surname ?? "surname"}</h3>
                        <h5>{this.state.user.title ?? "user job"}</h5>
                    </Card.Text>
                    <Card.Text className=" text-left text-black d-flex">
                        <p className="p-0 m-0">{this.state.user.area}    • </p>
                        <a className="p-0 m-0 ml-2">500+ connections</a>
                        <p className="p-0 m-0 ml-2"> • </p>
                        <a className="p-0 m-0 ml-2">More info</a>
                    </Card.Text>
                </Card.Body>
                <Card className="mx-3 p-0 mb-4">
                    <Card.Header as="p" className="text-left p-2 m-0">
                        <div className="d-flex justify-content-between">
                        <p className="p-0 m-0">Open to work</p> <FaPencilAlt className="text-right"/>
                    </div>
                    <p className="p-0 m-0">Frontend Web Developer roles</p></Card.Header>
                    <Card.Body className="p-0 m-0">
                        <Card.Text className="p-0 m-0 d-flex align-items-center">
                           <AiFillEye className="p-0 my-0 text-black mx-2 d-flex align-items-center"/> <p className="p-0 m-0 text-left">Only recruiters</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Card>
        )
    }
}
