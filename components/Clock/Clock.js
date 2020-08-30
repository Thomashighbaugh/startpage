import React, { Component } from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import styled from "styled-components";

const ClockDiv = styled.div`
  border-radius: 25px;
  border: 0.25rem solid #efeeff;
  background: #292d35;
  padding: 3.5rem;
  color: #efeeff;
  text-align: center;
  justify-content: center;
  align-content: center;
  margin: 0;
  &:hover {
    border-color: #00caff;
  }
`;
const Time = styled.h1`
  font-size: 4.25rem;
  margin-bottom: 0;
  margin-top: 0;
  line-height: 1.25;
  text-shadow: #939597 0.25rem 0.25rem;
  &:hover {
    color: #00caff;
    text-shadow: #efeeff 0.25rem 0.25rem;
  }
`;

const LongDate = styled.h3`
  font-size: 2rem;
  margin-top: 1rem;
  text-shadow: #939597 0.125rem 0.125rem;
  &:hover {
    color: #00caff;
    text-shadow: #efeeff 0.125rem 0.125rem;
  }
`;
class Clock extends Component {
  constructor(props) {
    super(props);

    this.timeFormat = props.timeFormat || "HH:mm";
    this.dateFormat = props.dateFormat || "MM/dd/yyyy";

    this.state = {
      time: this.timeString,
      date: this.dateString,
    };

    setInterval(() => this.updateTime(), 5000);

    this.updateTime = this.updateTime.bind(this);
  }

  updateTime() {
    this.setState({
      time: this.timeString,
      date: this.dateString,
    });
  }

  get dateString() {
    return format(new Date(), this.dateFormat);
  }

  get timeString() {
    return format(new Date(), this.timeFormat);
  }

  render() {
    return (
      <ClockDiv>
        <Time className="card-title ">{this.state.time}</Time>{" "}
        <LongDate className="small">{this.state.date}</LongDate>
      </ClockDiv>
    );
  }
}

export default Clock;

Clock.propTypes = {
  dateFormat: PropTypes.string,
  timeFormat: PropTypes.string,
};
