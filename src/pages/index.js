import React from 'react'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import GoogleMap from '../components/GoogleMap'
//import Image from '../components/image'
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
//<Link to="/page-2/">Go to page 2</Link>

const IndexPage = () => (
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
      <div className="remitente_texto">De: José Ramos</div>  
    </div>
    <div className="remitente">
      <div className="description">Te envió un vale prepagado oky :)</div>
    </div>
    <div className="remitente">
      <div className="code_canje">Código de canje</div>
    </div>  
    <div className="remitente">
      <div className="container_code"></div>
    </div>
    <div className="remitente">
      <div className="text_expiracion">Expira el 24/05/2021</div>
    </div>  
  </div>  
  
  <div className="gray_section">
    <StaticImage
    className="logo_group"
    src="../images/logo_group.png"  
    quality={95}
    formats={["AUTO", "WEBP", "AVIF"]}
    alt="A Gatsby astronaut"  
    />
    <div className="voucher">
      <StaticImage
      className="logo_campero"
      src="../images/logo_campero.png"  
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"  
      />
    </div>
    <div className="voucher_2"></div>
    <div className="name_voucher">Combo 12 piezas con postre - Mesas</div>
    <div className="name_validate">Válido en mesas</div>
    <div className="description_voucher">
    <table>  
  <tbody>
    <tr>
      <td>cell spans rows</td>
      <td>column spanning</td>
    </tr> 
    <tr>
      <td>cell spans rows</td>
      <td>column spanning</td>
    </tr> 
    <tr>
      <td>cell spans rows</td>
      <td>column spanning</td>
    </tr> 
    <tr>
      <td>cell spans rows</td>
      <td>column spanning</td>
    </tr>    
    <tr>
      <td>cell spans rows</td>
      <td>column spanning</td>
    </tr>     
  </tbody>
</table>
    </div>
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
  
  export default IndexPage
  