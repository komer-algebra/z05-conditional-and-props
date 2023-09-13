import React from 'react';  // Imported whole library React from pckg react (*)
                            // just to use React.Component (in this module)

class ConditionalRendering extends React.Component {
                        // using React.Component from React that we imported (*)
  // constructor(props){                              // constructor not needed
  //   super(props);
  // }
  render(){
    return (
    <>
      {
        typeof this.props.number === 'number'  &&
          this.props.number > 0 ?
            <p>Želim vam ugodan dan</p> :
            <p>Želim vam ugodnu noć</p>
      }
    </>
    );
  }
}

export default ConditionalRendering;
