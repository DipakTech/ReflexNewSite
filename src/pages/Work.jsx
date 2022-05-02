// import React from 'react'
// import { Container } from '../components/globlaStyle/Container.style'
// import { OurProducts } from '../OurProduct'
// import styled from 'styled-components'
// import playstore from '../assets/images/OurProduct/playstore.png'

// const WorkStyleContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
//   gap: 3rem;
//   justify-content: center;
//   margin-bottom: 20px;

//   .singleCard {
//     background-color: #fff;
//     box-shadow: 0px 4px 7px 2px rgba(0, 0, 0, 0.25);
//     padding: 32px;
//     text-align: center;

//     .imgDiv {
//       margin: 0 auto;
//       width: 250px;
//       height: 175px;
//       border: 1px solid #2aaeff;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
//     #bodyContant {
//       text-align: justify;
//     }
//   }
// `
// const BtnStyle = styled.ul`
//   width: 90%;
//   display: flex;
//   justify-content: space-between;
// `
// const BTNS = () => {
//   return (
//     <BtnStyle>
//       <li>
//         <a href='#'>ios</a>
//       </li>
//       <li>
//         <a href='#'>android</a>
//       </li>
//       <li>
//         <a href='#'>
//           <img src={playstore} alt='playstore logo' />
//         </a>
//       </li>
//     </BtnStyle>
//   )
// }

// const Work = () => {
//   return (
//     <Container>
//       <WorkStyleContainer>
//         {OurProducts.map((item) => {
//           return (
//             <div className='singleCard' key={item.id}>
//               <div className='imgDiv'>
//                 <img src={item.img} alt='name' />
//               </div>
//               <h4>{item.name}</h4>
//               <p id='bodyContant'>{item.body}</p>
//               <BTNS />
//             </div>
//           )
//         })}
//       </WorkStyleContainer>
//     </Container>
//   )
// }

// export default Work
