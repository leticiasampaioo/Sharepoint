import * as React from 'react';
import { ILuisCostaProps } from './ILuisCostaProps';
import "./style.css";

export default class LuisCosta extends React.Component<ILuisCostaProps, {}> {
  public render(): React.ReactElement<ILuisCostaProps> {
    return (
      <>
        <div className="sixteen wide column rendered-example views-card-types-card-example-card" style= {{"padding": "2rem"}}>
          <div className="ui card">
            <div className="image">
              <img src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
            </div>
            <div className="content">
              <div className="header">Matthew</div>
              <div className="meta">
                <span className="date">Joined in 2015</span>
              </div>
              <div className="description">Matthew is a musician living in Nashville.</div>
            </div>
            <div className="extra content">
              <a>
                <i aria-hidden={true} className="user icon" />22 Friends
                </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
