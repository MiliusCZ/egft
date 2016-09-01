import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getTransactions } from 'actions/app';

export class Transactions extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        loading: PropTypes.bool,
        data: PropTypes.array
    };

    componentDidMount() {
        this.props.dispatch(getTransactions());
    }

    render() {

        const transactions = this.props.data.map((transaction, index) => (
            <div key={index}>{transaction.Title}</div>
        ));

        return (
            <div className="page-content">
                {transactions}
            </div>
        );
    }
}

function mapStateToProperties(state) {
    return {
        loading: state.transactions.loading,
        data: state.transactions.data
    };
}

export default connect(mapStateToProperties)(Transactions);