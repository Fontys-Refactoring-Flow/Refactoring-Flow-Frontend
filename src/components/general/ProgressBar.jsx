import '../../style/ProgressBar.css'
function ProgressBar(props) {
  return (
    <div class="progress">
        <div class="progress-bar bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style ={{width : props.Progress + '%'}}></div>
        </div>
  );
}

export default ProgressBar;
