import React , {useEffect, useState} from 'react'
import Layout from '../components/layout'
import GoogleMap from '../components/GoogleMap'
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import axios from "axios"
var gray_section = "gray_section";
var logo_group = "logo_group";
var voucher_2 = "voucher_2";

export default function IndexPage () {
  useEffect(() => {
    getData();
  }, []);
  
  let [responseData, setResponseData] = React.useState('')  
  const getData = () => {
    if(window.location.pathname.indexOf("vouchers") > -1){
      let voucher = window.location.search.split("?=")[1];        
      let data = {
        "h":voucher
      }    
      let url = "https://midemo.oky.app/verify_voucher.php"
      axios
      .post(url, data)
      .then((data_response) => {
        console.log("Data:", data_response);
        if(data_response.data.data.Voucher_Name.indexOf("Vale por") > -1){
          console.log("Es un vale de dinero");
          gray_section = "gray_section_short";
          logo_group = "logo_group_short";
          voucher_2 = "voucher_2_short";
        }
        data_response.data.data.Expiration_Date =  data_response.data.data.Expiration_Date.split(" ")[0];                
        setResponseData(data_response.data.data);        
      })
      .catch((error)=> {
        if (error.response) {
          if(error.response.data["error"] === true && error.response.data["message"] === "Voucher has expired"){
            return error.response.data["message"];
          }
        } else if (error.request) {
          return error.request;
        } else {
          return error.message;
        }
      });
    }
    
  }
  
  
  return (
    <Layout>
    <Seo title="Home" /> 
    
    <div className="content_logo_oky">
    <StaticImage
    src="../images/logo_oky.png"
    width={200}
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="A Gatsby astronaut"    
    />
    <StaticImage
    src="../images/okyApp_ban.png"
    width={400}
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="A Gatsby astronaut"
    style={{ marginBottom: `1.45rem` }}
    className="logoOky"
    />
    </div>     
    
    <div className="title_oky">
    <div className="remitente">
    <div className="remitente_texto">De: {responseData.Sender_Name}</div>  
    </div>
    <div className="remitente">
    <div className="description">Te envió un vale prepagado oky :)</div>
    </div>
    <div className="remitente">
    <div className="code_canje">Código de canje</div>
    </div>  
    <div className="remitente">
    <div className="container_code">{responseData.Exchange_Code}</div>
    </div>
    <div className="remitente">
    <div className="text_expiracion">Expira el {responseData.Expiration_Date}</div>
    </div>  
    </div>  
    
    <div className={gray_section}>
    <StaticImage
    className={logo_group}
    src="../images/logo_group.png"  
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="A Gatsby astronaut"  
    />
    <div className="voucher">
    <img alt="logo partner" className="logo_campero" src={responseData.Partner_Logo} />
    </div>    
    <div className={voucher_2} 
       style={{                
        backgroundImage: `url(${(responseData.Voucher_Image)})`
      }}
    ></div>
    <div className="name_voucher">{responseData.Voucher_Name}</div>    
    <div className="description_voucher"  dangerouslySetInnerHTML={{__html: responseData.Voucher_Description}}></div>
    </div>
    
    <StaticImage
    className="vector_group2"
    src="../images/vector_group2.png"  
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="A Gatsby astronaut"  
    />
    
    <div className="information_group"></div>
    
    <StaticImage
    className="vector_group2"
    src="../images/logo_group.png"  
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="A Gatsby astronaut"  
    />
    
    <div className="mapa_more">
    <p className="store">Mapa de Tiendas</p>
    <GoogleMap/>
    </div> 
    
    <div className="remitente">
    <div className="dudas">Dudas o problemas de canje</div>    
    </div> 
    
    <div className="group_redes"></div>
    
    <div className="img_oky_puedes">
    <StaticImage
    className="oky_puedes"
    src="../images/oky_tu_puedes.png"
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="A Gatsby astronaut"  
    />
    </div>
    </Layout>
    )
  }
  
  