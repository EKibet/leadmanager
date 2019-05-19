import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getLead, deleteLead } from '../../actions/lead'
class Lead extends Component {

    state = {}
    componentDidMount() {
        this.props.getLead()
    }
    static propTypes = {
        lead: PropTypes.array.isRequired
    }
    render() {
        return (
            <Fragment>
                <h1> leadss</h1>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.lead.map(item => (
                                <tr key={item.id}>
                                <td> {item.id}</td>
                                <td> {item.name}</td>
                                <td> {item.email}</td>
                                <td> {item.message}</td>
                                <td> <buttton onClick ={this.props.deleteLead.bind(this,item.id)} className="btn btn-danger btn-sm">Delete</buttton>
                                </td>
                                </tr>
                                    
                        ))
                        }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    lead: state.lead.lead
})
export default connect(mapStateToProps, { getLead, deleteLead })(Lead);