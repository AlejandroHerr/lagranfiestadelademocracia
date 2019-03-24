import React from 'react';
import { Box, Flex } from 'rebass';
import NormalText from './common/NormalText';

const PartyResultsHeader = () => (
  <Flex>
    <Box width="25px" />
    <Box mx={1} width={3.5 / 12} css={{ borderBottom: '1px solid' }}>
      <NormalText fontWeight="bold">Partido</NormalText>
    </Box>
    <Box mx={1} width={2 / 12} css={{ borderBottom: '1px solid' }}>
      <NormalText fontWeight="bold" textAlign="center">
        Votos
      </NormalText>
    </Box>
    <Box mx={1} width={2 / 12} css={{ borderBottom: '1px solid' }}>
      <NormalText fontWeight="bold" textAlign="center">
        Escaños
      </NormalText>
    </Box>
    <Box mx={1} width={1 / 12} css={{ borderBottom: '1px solid' }}>
      <NormalText fontWeight="bold" textAlign="right">
        Distorsion
      </NormalText>
    </Box>
  </Flex>
);

export default PartyResultsHeader;
