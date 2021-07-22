import React from "react";

import ImageEvent from "./ImageEvent.jpeg";

export const UpComingEvent = () => {
  return (
    <div>
      <h2>Upcoming event</h2>
      <div className="Upcoming">
        <section id="details">
          <section>
            <i>Gatundu Children's Home</i>
            <h4>Kids Population: 54</h4>
          </section>

          <div className="sections">
            <section id="lists">
              <li>16 Secondary kids</li>
              <li>5 kids to join secondary</li>
              <li>33 Primary going kids</li>
            </section>

            <section>
              <ul>Youngest 5 years</ul>
              <ul>Oldest 20 years</ul>
            </section>

            <section>
              <ul>32 girls</ul>
              <ul>22 boys</ul>
            </section>
          </div>

          {/* <h5>Expected 34 kids on the day of the event</h5> */}

          <div id="secpart">
            <section>
              <h3>Donations</h3>
              <div id="lists">
                <li>Dry foods</li>
                <li>Cereals</li>
                <li>Toiletries</li>
                <li>Sanitary towels</li>
                <li>Books/stationary</li>
                <li>Milk</li>
              </div>
            </section>
            <section>
              <h4>Let's meet at Bata Hilton 8am</h4>
            </section>
          </div>
        </section>
        <div>
          <img
            style={{ width: "600px", maxHeight: "700px" }}
            src={ImageEvent}
          />
        </div>
      </div>
    </div>
  );
};
