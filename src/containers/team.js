import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getTeam } from 'actions/app';

import { Profile } from 'components/profile';

export class Team extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        loading: PropTypes.bool,
        data: PropTypes.array
    };

    componentDidMount() {
        this.props.dispatch(getTeam());
    }

    render() {
         const profiles = this.props.data.map((profile, index) => (
            <Profile key={index} gray={index > 0} heading={profile.name} info={profile.bio} photo={profile.photoUrl} />
        ));

        return (
            <div className="page-content">
                {profiles}
            </div>
        );
    }
}

function mapStateToProperties(state) {
    return {
        loading: state.team.loading,
        data: state.team.data
    };
}

export default connect(mapStateToProperties)(Team);