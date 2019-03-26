/* eslint-disable jsx-a11y/label-has-for */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box } from 'rebass';

import {
  changeAllocationMethod as changeAllocationMethodAction,
  changeElectoralDistrictType as changeElectoralDistrictTypeAction,
  changeMinThreshold as changeMinThresholdAction,
} from '../actions/electoralSystem';
import resultsWithPartyDataForViewSelector from '../selectors/resultsWithPartyDataForViewSelector';
import PartyResultsTable from '../components/PartyResultsTable';
import PartyResultPropTypes from '../propTypes/PartyResultPropTypes';
import { regionTypesList } from '../constants/regions';

import {
  electoralDistrictTypeSelector,
  allocationMethodSelector,
  minThresholdSelector,
} from '../selectors/electoralSystem';
import { seatAllocationMethodList } from '../constants/seatAllocation';
import VotingSystemControls from '../components/VotingSystemControls';

class Main extends PureComponent {
  onAllocationMethodChange = event => {
    const { changeAllocationMethod } = this.props;

    const { value } = event.target;

    changeAllocationMethod(value);
  };

  onElectoralDistrictTypeChange = event => {
    const { changeElectoralDistrictType } = this.props;

    const { value } = event.target;

    changeElectoralDistrictType(Number(value));
  };

  onMinThresholdChange = event => {
    const { changeMinThreshold } = this.props;

    const { value } = event.target;

    const numberValue = Number(value);

    changeMinThreshold((numberValue > 0 && numberValue) || 0);
  };

  render() {
    const { allocationMethod, totalResults, electoralDistrictType, minThreshold } = this.props;
    const { resultsByParty } = totalResults;

    return (
      <Box>
        <VotingSystemControls
          allocationMethod={allocationMethod}
          electoralDistrictType={electoralDistrictType}
          minThreshold={minThreshold}
          onAllocationMethodChange={this.onAllocationMethodChange}
          onElectoralDistrictTypeChange={this.onElectoralDistrictTypeChange}
          onMinThresholdChange={this.onMinThresholdChange}
        />
        <PartyResultsTable resultsByParty={resultsByParty} />
      </Box>
    );
  }
}

Main.propTypes = {
  allocationMethod: PropTypes.oneOf(seatAllocationMethodList).isRequired,
  electoralDistrictType: PropTypes.oneOf(regionTypesList).isRequired,
  totalResults: PropTypes.shape({
    resultsByParty: PropTypes.arrayOf(PartyResultPropTypes).isRequired,
  }).isRequired,
  minThreshold: PropTypes.number.isRequired,
  changeAllocationMethod: PropTypes.func.isRequired,
  changeElectoralDistrictType: PropTypes.func.isRequired,
  changeMinThreshold: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allocationMethod: allocationMethodSelector(state),
  electoralDistrictType: electoralDistrictTypeSelector(state),
  minThreshold: minThresholdSelector(state),
  totalResults: resultsWithPartyDataForViewSelector(state),
});

const mapDispatchToProps = {
  changeAllocationMethod: changeAllocationMethodAction,
  changeElectoralDistrictType: changeElectoralDistrictTypeAction,
  changeMinThreshold: changeMinThresholdAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
