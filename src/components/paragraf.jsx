export function ConditionalRendering(props){
  return props.number && ( props.number >= 0 ?
    <>
      <p>Želim vam ugodan dan</p>
    </> :
    <>
      <p>Želim vam ugodnu noć</p>
    </>
  );
}

// isto kao:
//
// const ConditionalRendering = () => {
//   const pozBr = <p>Želim vam ugodan dan</p>
//   const negBr = <p>Želim vam ugodnu noć</p>
//   const provjera = props.number >= 0 ? pozBr : negBr;
//   return (
//     <>
//     { props.number && provjera}
//     </>
//   );
// }
