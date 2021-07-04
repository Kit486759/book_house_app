import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { ContextProvider } from './ContextApi';
import { Link } from 'react-router-dom';
import moment from 'moment';



class DatePicker extends Component {

    static contextType = ContextProvider

    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            days: 0,
            qty: 0,
            start: "",
            end: ""
        }
    }

    countDays = (startDate, endDate) => {

        if (startDate !== null && endDate !== null) {
            this.setState({
                days: endDate.diff(startDate) / 1000 / 60 / 60 / 24,
                start: moment(startDate).format('ll'),
                end: moment(endDate).format('ll')
            })
        }

    }


    render() {

        return (
            <div>
                <p>Choose the day</p>
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => {
                        this.setState({ startDate, endDate })
                        this.countDays(startDate, endDate)
                    }} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />
                <div>
                    {this.props.price !== 0 && this.state.qty !== 0 && this.state.days !== 0 ?
                        <p>$ {this.props.price * this.state.qty * this.state.days} CAD (tax not included)</p>
                        :
                        null
                    }

                    <label>Guests: </label>
                    <input className="qty" type="number" min="1" max="10" placeholder="1" onChange={(e) => this.setState({ qty: parseInt(e.target.value) })}></input>
                </div>
                <Link to={{
                    pathname: "/booking",
                    state: {
                        data: this.props.data,
                        days: this.state.days,
                        qty: this.state.qty,
                        price: this.props.price,
                        start: this.state.start,
                        end: this.state.end
                    }
                }} type="button" className="btn">Book</Link>
            </div>
        )
    }
}

export default DatePicker;