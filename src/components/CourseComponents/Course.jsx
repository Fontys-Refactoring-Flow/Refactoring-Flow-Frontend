import React, { Component } from 'react';
import ProgressBar from '../GeneralComponents/ProgressBar';
import '../../style/Main.css'
import SegmentService from '../../Services/SegmentService';


class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            Progress : 1,
            total : 10,
            course : 1,
            segment: []
        }
    }

    componentDidMount() {
        // SegmentService.findSegmentByNrAndCourseId(this.state.Progress, this.state.course).then((res) => {
        //     // console.log(res)
        //     // this.setState({Segment: res.data });
        //     // console.log(this.state.Segment.text)
        // })
    }

    NextCourse = () => {
        this.setState(
            {
                Progress : this.state.Progress += 1 
            }
        )
    }

    PrevCourse = () => {
        this.setState(
            {
                Progress : this.state.Progress -= 1 
            }
        )
    }


    render() { 
        return ( 
            <div>
                <h1>{this.state.Segment.title}</h1>
                <div>{this.state.Segment.text}</div>
                { this.state.Progress != 0 && <a className='button' onClick={this.PrevCourse} style={{bottom:'100px', left:'100px', position:'fixed'  }}>PreviousCourse</a> }
                { this.state.total > this.state.Progress && <a className='button' onClick={this.NextCourse} style={{bottom:'100px', right:'100px', position:'fixed'  }}> NextCourse </a>}
                <ProgressBar Progress = {this.state.Progress / this.state.total * 100} />
            </div>
         );
    }
}
 
export default Course;