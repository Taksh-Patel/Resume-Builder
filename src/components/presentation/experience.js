import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
// import { connect } from 'react-redux'
// import * as educationActions from '../../actions/educationActions';
// import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";
import { setExperience, updateExperience } from "../../redux/actions/experienceAction";
import { connect } from "react-redux";

function Experience(props) {
  console.log('Experience');
  let history = useHistory();
  const [experience,setExperience]= useState(props.experienceSection); //{}

  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setExperience({...experience,[key]:val})
  }
  const getFieldData=(key)=>{
    if(experience && experience[key]){
      return experience[key]
    }
    return "";
}
  const onSubmit = async(e) => {
    if(props.experienceSection!=null){
      //update
      props.updateExperience(experience)
    }else{
      //set
      props.setExperience(experience)
    }
     history.push('/skills')
  }

    
    return (
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Experience Section</h2>
            <div className="form-section">
              <div className="input-group"><label>Company Name</label>
                <div className="effect"><input type="text" name={fieldCd.CompanyName}
                  onChange={onchange} value={getFieldData(fieldCd.CompanyName)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Job Role</label>
                <div className="effect"><input type="text" name={fieldCd.JobRole}
                  onChange={onchange} value={getFieldData(fieldCd.JobRole)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Location</label>
                <div className="effect"><input type="text" name={fieldCd.Location2}
                  onChange={onchange} value={getFieldData(fieldCd.Location2)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Start Date</label>
                <div className="effect"><input type="text" name={fieldCd.StartDate}
                  onChange={onchange} value={getFieldData(fieldCd.StartDate)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>End Date</label>
                <div className="effect"><input type="text" name={fieldCd.EndDate}
                  onChange={onchange} value={getFieldData(fieldCd.EndDate)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Enter Description Point 1</label>
                <div className="effect"><input type="text"  name={fieldCd.Desc1}
                  onChange={onchange} value={getFieldData(fieldCd.Desc1)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Enter Description Point 2</label>
                <div className="effect"><input type="text" name={fieldCd.Desc2}
                  onChange={onchange} value={getFieldData(fieldCd.Desc2)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Enter Description Point 3</label>
                <div className="effect"><input type="text"  name={fieldCd.Desc3}
                  onChange={onchange} value={getFieldData(fieldCd.Desc3)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Enter Description Point 4</label>
                <div className="effect"><input type="text"  name={fieldCd.Desc4}
                  onChange={onchange} value={getFieldData(fieldCd.Desc4)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="form-buttons">
                <button className="btn hvr-float-shadow" type='button' onClick={onSubmit}>Next</button>
                <NavLink to='/contact' className="center">Back</NavLink>
              </div>
            </div>
          </div>

          <div className="preview-card">
            <ResumePreview contactSection={props.contactSection} educationSection={props.educationSection} experienceSection={experience} skinCd={props?.document?.skinCd}></ResumePreview>            
          </div>
        </div>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return{
    document : state.document,
    contactSection : state.contact,
    educationSection : state.education,
    experienceSection : state.experience
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setExperience : (experience) => dispatch(setExperience(experience)),
    updateExperience : (experience) => dispatch(updateExperience(experience))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Experience)

