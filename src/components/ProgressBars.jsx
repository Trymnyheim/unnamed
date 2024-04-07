import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBars(props) {
  return <ProgressBar animated now={ props.value } label={`${ props.value }%`}/>;
}

export default ProgressBars;