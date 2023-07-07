import React, { Component } from 'react';
import { Tabs, Tab, Typography } from '@material-ui/core';
import Image1 from '../assets/Image1.png';
import Image2 from '../assets/Image2.png';

interface ArrowTabsState {
  value: number;
}

class ArrowTabs extends Component<{}, ArrowTabsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    this.setState({
      value: newValue,
    });
  };

  renderTabImage = (index: number) => {
    const { value } = this.state;
    const isActive = value === index;

    return (
      <div style={{ position: 'relative', width: '250px', height: '80px' }}>
        <img
          src={isActive ? Image2 : Image1}
          alt={`Tab ${index + 1}`}
          style={{ width: '100%', height: '100%' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: isActive ? 'white' : 'black',
            fontSize: '18px',
            textAlign: 'center',
            width: '100%',
          }}
        >
          {index === 0 && 'View Job Post'}
          {index === 1 && 'Review Proposals'}
          {index === 2 && 'Hire'}
        </div>
      </div>
    );
  };

  render() {
    const { value } = this.state;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginTop: '10rem' }}>
        <div style={{ display: 'flex' }}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            textColor="primary"
            aria-label="Arrow Tabs"
            classes={{ indicator: 'transparentIndicator' }}
          >
            <Tab
              style={{
                minHeight: 0,
                minWidth: 0,
                padding: 0,
                margin: '0 5px', // Adjust the margin to make the tabs closer in center
              }}
              icon={this.renderTabImage(0)}
            />
            <Tab
              style={{
                minHeight: 0,
                minWidth: 0,
                padding: 0,
                margin: '0 5px', // Adjust the margin to make the tabs closer in center
              }}
              icon={this.renderTabImage(1)}
            />
            <Tab
              style={{
                minHeight: 0,
                minWidth: 0,
                padding: 0,
                margin: '0 5px', // Adjust the margin to make the tabs closer in center
              }}
              icon={this.renderTabImage(2)}
            />
          </Tabs>
        </div>
      </div>
    );
  }
}

export default ArrowTabs;
