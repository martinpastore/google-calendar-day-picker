import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { localizations } from './localization';
import './DayPicker.css';

class DayPicker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            days: ['M', 'T', 'W', 'R', 'F', 'S', 'U'],
            selected: [],
        }
    }

    componentDidMount() {
        if (this.props.value) {
            this.setState({
                selected: this.props.value
            }, () => {
                this.props.value.map(v => {
                    this.markAsSelected(v)
                })
            })
        }

        if (this.props.ln) {
            this.setState({
                days: localizations[this.props.ln]
            })
        }
    }

    selectedDay(value) {
        this.setState({
            selected: [...this.state.selected, value]
        }, () => {
            this.filterValue()
            this.markAsSelected(value)
        })
    }

    markAsSelected(value) {
        if (document.getElementsByClassName(`day-${value}`)[0] && document.getElementsByClassName(`day-${value}`)[0].classList.contains('checked')) {
            document.getElementsByClassName(`day-${value}`)[0].classList.remove('checked')
        } else {
            document.getElementsByClassName(`day-${value}`)[0].classList.add('checked')
        }
    }

    filterValue() {
        const result = this.state.selected.filter((v, _, a) => a.indexOf(v) === a.lastIndexOf(v));
        this.setState({
            selected: result
        }, () => {
            this.props.onChange(this.state.selected)
        })
    }

    render() {
        return (
            <div>
                {this.state.days &&
                    this.state.days.map(d => {
                        return (<div className={`day-check day-${d}`} onClick={() => this.selectedDay(d)}>
                            {d}
                        </div>)
                    })
                }
            </div>
        )
    }
}

DayPicker.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.array,
    ln: PropTypes.string,
}

export default DayPicker;