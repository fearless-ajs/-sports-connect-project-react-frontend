import React, {useEffect} from 'react'
import filter from "../../media/filtergrid.png"
import NavBar from "../navbar/feeds-top-navbar/feeds-top-navbar.components";
import TalentComponentComponent from "./talent-component.component";

const TalentPoolComponent = ({ talents }) => {
    const { data } = talents.data;
    return (
      <div>
          <NavBar />
        <div
          className="content"
          style={{
            textAlign: "left",
            justifyContent: "center",
            background: "#F3FAF6",
            height: "auto",
            paddingTop: "2rem",
            paddingBottom: "5rem",
          }}
        >
          <div className="header-3">
            <h3>Talent Pool</h3>
            {/*<h4>*/}
            {/*    Filter Search*/}
            {/*  <img src={filter} alt="" />*/}
            {/*</h4>*/}
          </div>

            {
                data.map(talent => (
                    <TalentComponentComponent talent={talent} />
                ))
            }



        </div>
      </div>
    );
}

export default TalentPoolComponent
