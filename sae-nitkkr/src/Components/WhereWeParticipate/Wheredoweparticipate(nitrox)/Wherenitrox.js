import React from "react";
import "./Wherenitrox.css";

import NitroxBAJA1 from '../../../Assets/WhereWeParticipate/NitroxBAJA1.jpeg'
import NitroxBAJA2 from '../../../Assets/WhereWeParticipate/NitroxBAJA2.jpeg'
import NitroxATVC1 from '../../../Assets/WhereWeParticipate/NitroxATVC1.jpeg'
import NitroxATVC2 from '../../../Assets/WhereWeParticipate/NitroxATVC2.jpeg'

function Wherenitrox() {
  let image2;
  let image1;
  let image11;
  let image22;
  let check1=0;
  let check2=0;

  function swap()
  {
     image2=document.getElementById("Nitrox-image2");
     image1=document.getElementById("Nitrox-image1");
     if (check1==0)
     {
     image1.style.backgroundImage="url(/static/media/NitroxBAJA1.85b6668b.jpeg)";
     image2.style.backgroundImage="url(/static/media/NitroxBAJA2.7ab3514c.jpeg)";
     check1=1;
     }
     else if(check1==1)
     {
      image2.style.backgroundImage="url(/static/media/NitroxBAJA1.85b6668b.jpeg)";
      image1.style.backgroundImage="url(/static/media/NitroxBAJA2.7ab3514c.jpeg)";
      check1=0;
     }
  }
  function swap2()
  {
     image22=document.getElementById("Nitrox-image22");
     image11=document.getElementById("Nitrox-image11");
     if(check2==0)
     {
     image11.style.backgroundImage="url(/static/media/NitroxATVC2.dd4e92f7.jpeg)";
     image22.style.backgroundImage="url(/static/media/NitroxATVC1.91bedd24.jpeg)";
     check2=1;
     }
     else if(check2==1)
     {
      image22.style.backgroundImage="url(/static/media/NitroxATVC2.dd4e92f7.jpeg)";
      image11.style.backgroundImage="url(/static/media/NitroxATVC1.91bedd24.jpeg)";
      check2=0;
     }
  }
  return (
    <>
      <br/><br/><br/><br/>
      <div id="Nitrox-participate">
        <div id="Nitrox-titlecomp1" className="Nitrox-content1">
          where do we <span id="Nitrox-participate1">PARTICIPATE?</span>
        </div>
        <br />
        <br />
        <div id="Nitrox-baja" className="Nitrox-content">
          <span id="Nitrox-baja_title"> BAJA</span>
          <br />
          <br />
          <div id="Nitrox-baja_content">
            <div id="Nitrox-baja_text">
              Baja SAE is an Collegiate Design Series competition run by the
              Society Of Automotive Engineers International (SAE INTERNATIONAL)
              Teams of Students from universities all over the world design and
              build small off-road cars. <br />
              <br />
              <div id="Nitrox-bajaline">
                The goal in Baja SAE racing is to <b> design, build</b> and{" "}
                <b>race</b> off-road vehicles that can withstand the harshest
                elements of rough terrain. The vehicles used in Baja SAE racing
                are often similar in appearance to dune buggies.
              </div>
            </div>
            <div id="Nitrox-baja_image">
              <div id="Nitrox-image1">
                {/* <img src={abc1new} alt="imagee" id="car1" /> */}
              </div>
              <div id="Nitrox-image2" onClick={swap}>
                {/* <img
                src={def2}
                alt="imagee"
                id="car2"
              /> */}
              </div>
            </div>
          </div>
        </div>

        <br />
        <div id="Nitrox-atvc" className="Nitrox-content">
          <span id="Nitrox-atvc_title"> ATVC</span>
          <br />
          <br />
          <div id="Nitrox-atvc_content">
            <div id="Nitrox-atvc_image">
              <div id="Nitrox-image22" onClick={swap2}>
                {/* <img src={abc1new} alt="imagee" id="car1" /> */}
              </div>
              <div id="Nitrox-image11">
                {/* <img
                src={def2}
                alt="imagee"
                id="car2"
              /> */}
              </div>
            </div>

            <div id="Nitrox-atvc_text">
              The Third season of Aravalli Terrain Vehicle Championship, powered
              by infi-league Motorsports is a natioanl championship earnmarking
              all the techno freaks across the country <br />
              <br />
              <div id="Nitrox-atvcline">
              3500+ students. More than a hundred teams. Bests competing against the best to build the best dune buggy each year. And that is Aravalli Team Vehicle Championship (ATVC) for you. So if you are a competitive techno freak, now you know where to come!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wherenitrox;