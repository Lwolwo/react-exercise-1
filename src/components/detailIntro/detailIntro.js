import React, { Component } from 'react';
import Experience from './experience/Experience';
import './DetailIntro.scss';

export default class DetailIntro extends Component {
  render() {
    const infos = [
      {
        year: 1990,
        title: 'I was born in Katowice',
        detail:
          'Labore ea aliquip sint laboris exercitation magna anim. Mollit aliqua fugiat aliquip tempor id cillum dolore in. Ex aliqua incididunt et in est voluptate in minim mollit nisi. Quis cupidatat Lorem aliqua minim veniam fugiat tempor proident aliquip veniam reprehenderit. Nisi excepteur reprehenderit enim et aliqua cillum anim enim non nisi.',
      },
      {
        year: 2005,
        title: 'Secondary school specializing in artistic',
        detail:
          'Est consequat reprehenderit nisi id elit adipisicing veniam enim anim.',
      },
      {
        year: 2009,
        title: 'First level graduation in Graphic Design',
        detail:
          'Consectetur laboris anim cupidatat sit adipisicing velit dolor.Amet in eu qui id amet id.',
      },
      {
        year: 2012,
        title: 'Second level graduation in Graphic Design',
        detail:
          'Sit aute commodo sunt sit.Lorem id ex occaecat fugiat esse consequat exercitation ex in commodo id.Deserunt consequat eiusmod officia nulla amet labore non laborum ullamco voluptate in consectetur.',
      },
    ];
    return (
      <div className="detailIntro">
        <div className="about">
          <h3>ABOUT ME</h3>
          <p>
            Mollit quis consectetur labore adipisicing do eiusmod et. Labore
            amet nostrud sint fugiat ut sunt ex nostrud incididunt sunt
            voluptate. Incididunt occaecat ex proident amet. Pariatur ad nisi
            fugiat anim laboris consectetur incididunt et. Minim sit ipsum non
            duis eu. Nulla occaecat sint velit minim adipisicing. Cupidatat
            irure laborum nulla voluptate anim quis.
          </p>
        </div>
        <div className="education">
          <h3>EDUCATION</h3>
          {infos.map((item, index) => (
            <Experience
              key={index}
              year={item.year}
              title={item.title}
              detail={item.detail}
            />
          ))}
        </div>
      </div>
    );
  }
}
