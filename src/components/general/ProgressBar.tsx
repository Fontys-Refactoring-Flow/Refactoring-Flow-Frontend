import '../../style/ProgressBar.css'

type ProgressType = {
    progress: number
}

const ProgressBar = (props : ProgressType) => {
  return (
    <div className="progress">
        <div className="progress-bar bg-success"
             role="progressbar"
             aria-valuenow={75}
             aria-valuemin={0}
             aria-valuemax={100}
             style={{width: props.progress + '%'}}>
        </div>
    </div>
  );
}

export default ProgressBar;
