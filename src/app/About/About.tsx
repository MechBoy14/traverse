import { remote } from 'electron';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { theme } from '@/infrastructure/styles/theme';

class About extends React.Component {
  render() {
    return <>
      <AboutContainer>
        <Main>
          <TraverseTitle>
            <Icon src='../resources/icon.png' alt='Traverse Icon'/>
            Traverse
            <br/>
            <Version>v{remote.app.getVersion()}</Version>
          </TraverseTitle>
          <DonateTitle>Beer Me</DonateTitle>
          <DonationAddress>
            Ether
            <br/>
            <code>0x13EcA749be300C1951bD6E9d86bB395e2734BE20</code>
          </DonationAddress>
          <DonationAddress>
            Nano
            <br/>
            <code>xrb_3ii5t9x8a7or17zkf6syp7ntprd77z7tx9migsghb9rx5ymiop76kyrahef8</code>
          </DonationAddress>
        </Main>
        <Copyright>Copyright © 2019 Jason Raimondi, Digital Canvas Design LLC</Copyright>
      </AboutContainer>
    </>;
  }
}

const Icon = styled.img`
    width: 175px;
    height: 175px;
`;

const DonateTitle = styled.p`
    font-size: 0.8rem;
    font-weight: 600;
`;

const DonationAddress = styled.p`
    color: ${theme.colors.grey};
    font-size: 0.6rem;
    font-weight: 600;
    & code {
      color: ${theme.colors.purple};
    }
`;

const Main = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
`;

const TraverseTitle = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Version = styled.span`
    font-size: 0.85rem;
    color: ${theme.colors.grey}
`;

const Copyright = styled.h4`
   font-weight: 400;
   font-size: 0.45rem;
`;
export default withRouter(About);