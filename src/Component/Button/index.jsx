import styled from "styled-components";


   // corTexto = true;
  const MeuButton = styled.button`
    width: 100%;
    background: ${(props) => props.color};
    color: white;
    border: none;
    padding: 15px 30px;
    cursor: pointer;
  `;

export default MeuButton

//   return (
//     <div>
//       <MeuButton color={'violet'} disabled={disbable} onClick={handleButtonClick}> 
//         {/* <button disabled={disbable} onClick={handleButtonClick}>
//           {" "}
//           {text}
//         </button> */}
        
//         {text}
//       </MeuButton>
//     </div>
//   );

