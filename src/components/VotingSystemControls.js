/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';
import { regionTypes, regionTypesList } from '../constants/regions';
import { seatAllocationMethodTypes, seatAllocationMethodList } from '../constants/seatAllocation';
import NormalText from './common/NormalText';
import Select from './common/Select';

const ELECTORAL_DISTRICT_TYPE_OPTIONS = [
  { value: regionTypes.COUNTRY, label: 'Estatal' },
  { value: regionTypes.CCAA, label: 'CCAA' },
  { value: regionTypes.PROVINCE, label: 'Povincia' },
];

const ALLOCATION_METHOD_OPTIONS = [
  { value: seatAllocationMethodTypes.D_HONDT, label: 'D`Hondt' },
  { value: seatAllocationMethodTypes.SAINT_LAGUE, label: 'Sainte-Laguë' },
  { value: seatAllocationMethodTypes.SAINT_LAGUE_MOD, label: 'Sainte-Laguë Modificado' },
];

const VotingSystemControls = ({
  allocationMethod,
  electoralDistrictType,
  minThreshold,
  onAllocationMethodChange,
  onElectoralDistrictTypeChange,
  onMinThresholdChange,
}) => (
  <Flex flexDirection="column">
    <label htmlFor="electoralDistrictType">
      <Flex>
        <NormalText textAlign="right" width={1 / 2}>
          Circunscripción
        </NormalText>
        <Box width={1 / 2}>
          <Select
            name="electoralDistrictType"
            value={electoralDistrictType}
            onChange={onElectoralDistrictTypeChange}
            options={ELECTORAL_DISTRICT_TYPE_OPTIONS}
          />
        </Box>
      </Flex>
    </label>
    <label htmlFor="allocationMethod">
      <Flex>
        <NormalText textAlign="right" width={1 / 2}>
          Systema de Reparto de Votos
        </NormalText>
        <Box width={1 / 2}>
          <Select
            name="allocationMethod"
            value={allocationMethod}
            onChange={onAllocationMethodChange}
            options={ALLOCATION_METHOD_OPTIONS}
          />
        </Box>
      </Flex>
    </label>
    <label htmlFor="minThreshold">
      <Flex>
        <NormalText width={1 / 2} textAlign="right">
          Mínimo de Votos (%)
        </NormalText>
        <Box width={1 / 2}>
          <input
            type="number"
            id="minThreshold"
            name="minThreshold"
            step="0.5"
            value={minThreshold.toString()}
            onChange={onMinThresholdChange}
          />
        </Box>
      </Flex>
    </label>
  </Flex>
);

VotingSystemControls.propTypes = {
  allocationMethod: PropTypes.oneOf(seatAllocationMethodList).isRequired,
  electoralDistrictType: PropTypes.oneOf(regionTypesList).isRequired,
  minThreshold: PropTypes.number.isRequired,
  onAllocationMethodChange: PropTypes.func.isRequired,
  onElectoralDistrictTypeChange: PropTypes.func.isRequired,
  onMinThresholdChange: PropTypes.func.isRequired,
};

export default VotingSystemControls;
