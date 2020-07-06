import React from "react";
class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketlist: [],
      contactlist: [],
      agentlist: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:4040/tickets")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ ticketlist: data });
        return fetch("http://localhost:4040/contacts");
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ contactlist: data });
        return fetch("http://localhost:4040/agents");
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ agentlist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  display = (array, id) => {
    const details = array.find((data) => data.id === id);
    if (details === undefined) return "";
    return details.name.first + " " + details.name.last;
  };
  render() {
    return (
      <div>
        <h1>TICKET DETAILS</h1>
        <th
          style={{
            border: "1px solid black",
            padding: "8px",
            width: "300px",
          }}
        >
          Subject
        </th>
        <th
          style={{
            border: "1px solid black",
            padding: "8px",
            width: "300px",
          }}
        >
          Description
        </th>
        <th
          style={{
            border: "1px solid black",
            padding: "8px",
            width: "300px",
          }}
        >
          Contact
        </th>
        <th
          style={{
            border: "1px solid black",
            padding: "8px",
            width: "300px",
          }}
        >
          Agent
        </th>
        {this.state.ticketlist.map((ticket, index) => (
          <div key={index}>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "300px",
                }}
              >
                {ticket.subject}
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "300px",
                }}
              >
                {ticket.description}
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "300px",
                }}
              >
                {this.display(this.state.contactlist, ticket.contactId)}
              </th>{" "}
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "300px",
                }}
              >
                {this.display(this.state.agentlist, ticket.agentId)}
              </th>
            </tr>
          </div>
        ))}
      </div>
    );
  }
}
export default Ticket;
