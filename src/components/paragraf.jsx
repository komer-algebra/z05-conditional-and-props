export function ConditionalRendering(props){
  return  typeof props.number === 'number'  && ( props.number > 0 ?
    <>
      <p>Želim vam ugodan dan</p>
    </> :
    <>
      <p>Želim vam ugodnu noć</p>
    </>
  );
}
