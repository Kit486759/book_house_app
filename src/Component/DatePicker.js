import React, { Component, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import { ContextProvider } from './ContextApi';

// const { test } = useContext(ContextProvider)

class DatePicker extends Component {

    static contextType = ContextProvider

    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    }

    check = () => {



        if (this.state.startDate !== null || this.state.endDate !== null) {
            this.context.setDay(this.state.endDate.diff(this.state.startDate) / 1000 / 60 / 60 / 24)

        } else {
            alert(`Please select the day`)
        }


    }


    render() {

        return (
            <div>
                <div className="test good">test</div>
                <div className="test good">{this.state.focusedInput}</div>
                <button onClick={() => this.check()}>check</button>
                {/* <DayPickerRangeController/> */}
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate, days }) => this.setState({ startDate, endDate, days })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />
            </div>
        )
    }
}

export default DatePicker;