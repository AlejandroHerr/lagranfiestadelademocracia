import React from 'react';
import { Flex, Box } from 'rebass';

import NormalText from './common/NormalText';
import ColoredPercentageText from './common/ColoredPercentageText';
import PercentageText from './common/PercentageText';
import PartyResultPropTypes from '../propTypes/PartyResultPropTypes';
import NumberText from './common/NumberText';

const PartyResultRow = ({ partyResult }) => (
  <Flex>
    <Box my={1} width="25px">
      <Box mx="auto" css={{ backgroundColor: partyResult.color, width: '19px', height: '19px' }} />
    </Box>
    <Box my={1} mx={1} width={3.5 / 12}>
      <NormalText>{partyResult.name}</NormalText>
    </Box>
    <Box my={1} ml={1} width={1 / 12}>
      <NumberText textAlign="right">{partyResult.votes}</NumberText>
    </Box>
    <Box my={1} mr={1} width={1 / 12}>
      <PercentageText textAlign="right">{partyResult.percVotes}</PercentageText>
    </Box>
    <Box my={1} ml={1} width={1 / 12}>
      <NumberText textAlign="right">{partyResult.seats}</NumberText>
    </Box>
    <Box my={1} mr={1} width={1 / 12}>
      <PercentageText textAlign="right">{partyResult.percSeats}</PercentageText>
    </Box>
    <Box my={1} mx={1} width={1 / 12}>
      <NumberText textAlign="right">{partyResult.costPerSeat}</NumberText>
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
