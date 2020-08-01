import React from 'react';

import Bullet, { Tooltip } from 'devextreme-react/bullet';

const Melviz = () => {
  function getCustomizeTooltip(arg) {
    return {
      text: `Current t&#176: ${arg.value} &#176C<br>Average t&#176:${arg.target}&#176C`
    };
  }

  const weeksData = [{
    weekCount: 'First',
    bulletsData: [{
      value: 23,
      target: 20,
      color: '#ebdd8f'
    }, {
      value: 27,
      target: 24,
      color: '#e8c267'
    }, {
      value: 20,
      target: 26,
      color: '#e55253'
    }]
  }, {
    weekCount: 'Second',
    bulletsData: [{
      value: 24,
      target: 22,
      color: '#ebdd8f'
    }, {
      value: 28,
      target: 24,
      color: '#e8c267'
    }, {
      value: 30,
      target: 24,
      color: '#e55253'
    }]
  }, {
    weekCount: 'Third',
    bulletsData: [{
      value: 35,
      target: 24,
      color: '#ebdd8f'
    }, {
      value: 24,
      target: 26,
      color: '#e8c267'
    }, {
      value: 28,
      target: 22,
      color: '#e55253'
    }]
  }, {
    weekCount: 'Fourth',
    bulletsData: [{
      value: 29,
      target: 25,
      color: '#ebdd8f'
    }, {
      value: 24,
      target: 27,
      color: '#e8c267'
    }, {
      value: 21,
      target: 21,
      color: '#e55253'
    }]
  }];

  return (
    <div id="chart-demo">
      <div className="long-title"><h3>Daily temperature</h3></div>
      <table className="demo-table">
        <tbody>
        <tr>
          <th></th>
          <th>June</th>
          <th>July</th>
          <th>August</th>
        </tr>
        {weeksData.map((week, i) =>
          <tr key={i}>
            <th>{`${week.weekCount} week`}</th>
            {week.bulletsData.map((data, i) => {
              return <td key={i}>
                <Bullet
                  className="bullet"
                  startScaleValue={0}
                  endScaleValue={35}
                  value={data.value}
                  target={data.target}
                  color={data.color}
                >
                  <Tooltip customizeTooltip={getCustomizeTooltip} />
                </Bullet>
              </td>;
            })}
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

export default Melviz;