import React from "react";
import "./channel-overview.css";

interface ChannelOverviewProps {
   title: string;
   list: string[];
}
function ChannelOverview({ title, list }: ChannelOverviewProps) {
   return (
      <section className="channel-overview">
         <div className="channel-overview__inner-wrapper">
            <h3 className="channel-overview__title">{title}</h3>
            <div className="channel-overview__list">
               {list.map((text) => (
                  <div className="channel-overview__list-item" key={text}>
                     <p
                        className="channel-overview__list-item-text"
                        data-testid="channel-overview-list-item-text"
                     >
                        {text}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
export default ChannelOverview;
