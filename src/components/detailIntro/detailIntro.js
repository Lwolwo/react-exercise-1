import React, { Component } from 'react';
import './detailIntro.scss';

export default class DetailIntro extends Component {
  render() {
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
          <div className="experience">
            <p className="year">1990</p>
            <div className="describe">
              <p className="title">I was born in Katowice</p>
              <p className="detail">
                Duis consequat ipsum excepteur consectetur amet dolore ipsum
                irure cillum enim duis et est enim. Non reprehenderit aliquip
                labore ad enim nulla aliquip consequat nostrud ipsum incididunt
                fugiat ipsum. Consectetur voluptate consequat duis aute.
                Excepteur ipsum tempor commodo aliquip non eu. Velit ut ut
                dolore sint voluptate.
              </p>
            </div>
          </div>
          <div className="experience">
            <p className="year">2005</p>
            <div className="describe">
              <p className="title">Secondary school specializing in artistic</p>
              <p className="detail">
                Duis consequat ipsum excepteur consectetur amet dolore ipsum
                irure cillum enim duis et est enim. Non reprehenderit aliquip
                labore ad enim nulla aliquip consequat nostrud ipsum incididunt
                fugiat ipsum. Consectetur voluptate consequat duis aute.
                Excepteur ipsum tempor commodo aliquip non eu. Velit ut ut
                dolore sint voluptate.
              </p>
            </div>
          </div>
          <div className="experience">
            <p className="year">2009</p>
            <div className="describe">
              <p className="title">First level graduation in Graphic Design</p>
              <p className="detail">
                Fugiat consequat aute esse ullamco ullamco ea magna enim laborum
                ad. Officia occaecat excepteur amet ea. Mollit ut aliquip esse
                consectetur magna sit deserunt.
              </p>
            </div>
          </div>
          <div className="experience">
            <p className="year">2012</p>
            <div className="describe">
              <p className="title">Second level graduation in Graphic Design</p>
              <p className="detail">
                Duis consequat ipsum excepteur consectetur amet dolore ipsum
                irure cillum enim duis et est enim. Non reprehenderit aliquip
                labore ad enim nulla aliquip consequat nostrud ipsum incididunt
                fugiat ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
