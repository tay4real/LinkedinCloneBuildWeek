import React, { Component } from "react";
import { Card } from "react-bootstrap";
import SideCard from "./SideCard";

export default class Category extends Component {
  render() {
    return (
      <Card>
        <h2 style={{ fontSize: "1.5em" }}>{this.props.title}</h2>
        <SideCard
          imgSrc="https://media-exp1.licdn.com/dms/image/C4D03AQGKZ7ATy0cbOQ/profile-displayphoto-shrink_100_100/0?e=1612396800&v=beta&t=nO3SEM6k67V2uvH4JBpGPpn1OrFsZ65zvvb4cvzXzMw"
          title="Tunde Fatoke"
          description="Lecturer"
        />
        <SideCard
          imgSrc="https://media-exp1.licdn.com/dms/image/C4E03AQHH-72yiL4USg/profile-displayphoto-shrink_100_100/0?e=1612396800&v=beta&t=14YytL1WyLLe5Pvf5NfqicarAcpq6ycRKC6MMNv6buw"
          title="Toyin gift"
          description="IT Specialist"
        />
        <SideCard
          imgSrc="https://media-exp1.licdn.com/dms/image/C5103AQHDnYcH6XpMEA/profile-displayphoto-shrink_100_100/0?e=1612396800&v=beta&t=SSt8PdveU0sh2rQxjvdHRfcm6M7kDukSH1f4RnmYF5I"
          title="Abeeb Oyelere"
          description="Lecturer at Dept of Information Science"
        />
        <SideCard
          imgSrc="https://media-exp1.licdn.com/dms/image/C4D03AQHRYKrIDI0nvA/profile-displayphoto-shrink_100_100/0?e=1612396800&v=beta&t=jEYlt28Unfw9woawG-4IIB8EY3AbsMoXXS5lzdjskI8"
          title="Babatunde Salami"
          description="Lecturer at FUTA"
        />
      </Card>
    );
  }
}
