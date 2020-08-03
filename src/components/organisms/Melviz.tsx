import React from 'react';
import Property from "../../components/molecules/Property";
import Bullet, { Tooltip } from 'devextreme-react/bullet';
import color_box from "devextreme/ui/color_box";

const Melviz = (comparisons) => {
  function getCustomizeTooltip(arg) {
    return {
      text: `Title ${arg.title} Current: ${arg.value} %<br>Average: ${arg.target}%`
    };
  }

  function getTargetColor(value, target) {
    let color;
    (value > target) ? color = '#ff5959' : color = '#0df40d';
    return color;
  }

  // const dataMelviz = [{
  //     title: 'instrumental',
  //     value: 10.3,
  //     target: 1.9,
  //     targetColor: getTargetColor(10.3, 1.9),
  //     color: '#1db2f5'
  //   },
  //   {
  //     title: 'instrumental+dance',
  //     value: 11,
  //     target: 22,
  //     targetColor: getTargetColor(11, 22),
  //     color: '#1db2f5'
  //   },
  //   {
  //     title: 'song',
  //     value: 3.2,
  //     target: 24,
  //     targetColor: getTargetColor(3.2, 24),
  //     color: '#1db2f5'
  //   },
  //   {
  //     title: 'other',
  //     value: 45.4,
  //     target: 25,
  //     targetColor: getTargetColor(45.4, 25),
  //     color: '#1db2f5'
  //   }];

  const type = 'Performance';
  console.log(comparisons.data);
  return (
    <div id="melviz">
      <div className="long-title"><h3>{type}</h3></div>

          {comparisons.data[0].map((data, i) => {
            console.log('-----data-------------');
            console.log(data);

            return (
              <div>
                <Property data={{ title: data.title}}/>
                <Bullet
                  className="bullet"
                  startScaleValue={0}
                  endScaleValue={35}
                  value={100/(data.current)}
                  target={100/(data.average)}
                  targetColor={getTargetColor(data.average, data.current)}
                  color='#1db2f5'
                  title={data.attributeTitle}
                  key={i}
                >
                  <Tooltip customizeTooltip={getCustomizeTooltip} />
                </Bullet>
              </div>
            )
          })}

    </div>
  )
}

export default Melviz;