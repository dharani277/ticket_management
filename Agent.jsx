import React from "react";
class Agent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agentlist: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:4040/agents")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ agentlist: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <h1>AGENT DETAILS</h1>
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
        {this.state.agentlist.map((agent, index) => (
          <div key={index}>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                width: "300px",
              }}
            >
              {agent.name.first}
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                width: "300px",
              }}
            >
              {agent.name.last}
            </th>
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                width: "300px",
              }}
            >
              {agent.mobile}
            </th>{" "}
            <th
              style={{
                border: "1px solid black",
                padding: "8px",
                width: "300px",
              }}
            >
              {agent.email}
            </th>
          </div>
        ))}
      </div>
    );
  }
}
export default Agent;
