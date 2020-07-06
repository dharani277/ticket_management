import React from "react";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactlist: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:4040/contacts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ contactlist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h1>CONTACT DETAILS</h1>
        <tr>
          <th
            style={{
              border: "1px solid black",
              padding: "8px",
              width: "300px",
            }}
          >
            First Name
          </th>
          <th
            style={{
              border: "1px solid black",
              padding: "8px",
              width: "300px",
            }}
          >
            Last Name
          </th>
          <th
            style={{
              border: "1px solid black",
              padding: "8px",
              width: "300px",
            }}
          >
            Mobile
          </th>
          <th
            style={{
              border: "1px solid black",
              padding: "8px",
              width: "300px",
            }}
          >
            Email
          </th>
        </tr>
        {this.state.contactlist.map((contacts, index) => (
          <div key={index}>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "300px",
                }}
              >
                {contacts.name.first}
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "300px",
                }}
              >
                {contacts.name.last}
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "300px",
                }}
              >
                {contacts.mobile}
              </th>{" "}
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "300px",
                }}
              >
                {contacts.email}
              </th>
            </tr>
          </div>
        ))}
      </div>
    );
  }
}
export default Contact;
