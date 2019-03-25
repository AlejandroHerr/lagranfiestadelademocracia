import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

import PartyResultsHeader from './PartyResultsHeader';
import PartyResultRow from './PartyResultRow';
import PartyResultPropTypes from '../propTypes/PartyResultPropTypes';

const PartyResultsTable = ({ resultsByParty }) => {
  return (
    <Flex flexDirection="column">
      <PartyResultsHeader />
      {resultsByParty.map(partyResult => (
        <PartyResultRow key={partyResult.id} partyResult={partyResult} />
      ))}
    </Flex>
  );
};

PartyResultsTable.propTypes = {
  resultsByParty: PropTypes.arrayOf(PartyResultPropTypes).isRequired,
};

export default PartyResultsTable;
