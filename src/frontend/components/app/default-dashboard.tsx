import React from 'react'
import styled from 'styled-components'
import {
  Box,
  H2,
  Text,
} from '@adminjs/design-system'
const pageHeaderPaddingY = 74
const pageHeaderPaddingX = 250

export const DashboardHeader: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <Box
        bg="grey100"
        py={pageHeaderPaddingY}
        px={['default', 'lg', pageHeaderPaddingX]}
      >
        <Text textAlign="center" color="white">
          <H2>Administration Panel</H2>
        </Text>
      </Box>
    </Box>
  )
}

const Card = styled(Box)`
  display: ${({ flex }): string => (flex ? 'flex' : 'block')};
  color: ${({ theme }): string => theme.colors.grey100};
  text-decoration: none;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${({ theme }): string => theme.colors.primary100};
    box-shadow: ${({ theme }): string => theme.shadows.cardHover};
  }
`

Card.defaultProps = {
  variant: 'white',
  boxShadow: 'card',
}

export const Dashboard: React.FC = () => {
  return (
    <Box>
      <DashboardHeader />
    </Box>
  )
}

export default Dashboard
