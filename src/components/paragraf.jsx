const ConditionalRendering = (props) => {
  return (
    <>
      {!isNaN(props.number) &&
        props.number >= 0 ? <p key="">Želim vam ugodan dan</p> : <p key="">Želim vam ugodnu noć</p>}
    </>
  );
}

export default ConditionalRendering;


// kao Matej:
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
