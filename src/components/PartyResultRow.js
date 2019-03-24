import React from 'react';
import { Flex, Box } from 'rebass';

import NormalText from './common/NormalText';
import ColoredPercentageText from './common/ColoredPercentageText';
import PercentageText from './common/PercentageText';
import PartyResultPropTypes from '../propTypes/PartyResultPropTypes';

const PartyResultRow = ({ partyResult }) => (
  <Flex>
    <Box my={1} width="25px">
      <Box mx="auto" css={{ backgroundColor: partyResult.color, width: '19px', height: '19px' }} />
    </Box>
    <Box my={1} mx={1} width={3.5 / 12}>
      <NormalText>{partyResult.name}</NormalText>
    </Box>
    <Box my={1} ml={1} width={1 / 12}>
      <NormalText textAlign="right">{partyResult.votes}</NormalText>
    </Box>
    <Box my={1} mr={1} width={1 / 12}>
      <PercentageText textAlign="right">{partyResult.percVotes}</PercentageText>
    </Box>
    <Box my={1} ml={1} width={1 / 12}>
      <NormalText textAlign="right">{partyResult.seats}</NormalText>
    </Box>
    <Box my={1} mr={1} width={1 / 12}>
      <PercentageText textAlign="right">{partyResult.percSeats}</PercentageText>
    </Box>
    <Box my={1} mx={1} width={1 / 12}>
      <ColoredPercentageText textAlign="right">{partyResult.distortion}</ColoredPercentageText>
    </Box>
  </Flex>
);

PartyResultRow.propTypes = {
  partyResult: PartyResultPropTypes.isRequired,
};

export default PartyResultRow;
