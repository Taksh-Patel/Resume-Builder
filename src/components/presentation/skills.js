import React,{useState} from "react";
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import ResumePreview from './resumePreview'
import {skinCodes, fieldCd} from './../../constants/typeCodes';
// import { connect } from 'react-redux'
// import * as educationActions from '../../actions/educationActions';
// import {bindActionCreators} from 'redux';
import { useHistory } from "react-router-dom";
import { setSkills, updateSkills } from "../../redux/actions/skillsAction";
import { connect } from "react-redux";

function Skills(props) {
  console.log('Skills');
  let history = useHistory();
  const [skills,setSkills]= useState(props.skillsSection); //{}

  const onchange = (event) => {
    var key =event.target.name;
    var val =event.target.value;
    setSkills({...skills,[key]:val})
  }
  const getFieldData=(key)=>{
    if(skills && skills[key]){
      return skills[key]
    }
    return "";
}
  const onSubmit = async(e) => {
    if(props.skillsSection!=null){
      //update
      props.updateSkills(skills)
    }else{
      //set
      props.setSkills(skills)
    }
     history.push('/finalize')
  }

    
    return (
      <div className="container med education" >
        <div className="section funnel-section">
          <div className="form-card">
            <h2 className="form-heading center">Skills Section</h2>
            <div className="form-section">
              <div className="input-group"><label>Skill 1</label>
                <div className="effect"><input type="text" name={fieldCd.Skill1}
                  onChange={onchange} value={getFieldData(fieldCd.Skill1)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Skill 2</label>
                <div className="effect"><input type="text" name={fieldCd.Skill2}
                  onChange={onchange} value={getFieldData(fieldCd.Skill2)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Skill 3</label>
                <div className="effect"><input type="text" name={fieldCd.Skill3}
                  onChange={onchange} value={getFieldData(fieldCd.Skill3)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Skill 4</label>
                <div className="effect"><input type="text" name={fieldCd.Skill4}
                  onChange={onchange} value={getFieldData(fieldCd.Skill4)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Skill 5</label>
                <div className="effect"><input type="text" name={fieldCd.Skill5}
                  onChange={onchange} value={getFieldData(fieldCd.Skill5)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Skill 6</label>
                <div className="effect"><input type="text"  name={fieldCd.Skill6}
                  onChange={onchange} value={getFieldData(fieldCd.Skill6)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Skill 7</label>
                <div className="effect"><input type="text" name={fieldCd.Skill7}
                  onChange={onchange} value={getFieldData(fieldCd.Skill7)} /><span></span>
                </div>
                <div className="error"></div>
              </div>

              <div className="input-group"><label>Skill 8</label>
                <div className="effect"><input type="text"  name={fieldCd.Skill8}
                  onChange={onchange} value={getFieldData(fieldCd.Skill8)} /><span></span>
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
            <ResumePreview contactSection={props.contactSection} educationSection={props.educationSection} experienceSection={props.experienceSection} skillsSection={skills} skinCd={props?.document?.skinCd}></ResumePreview>            
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
    experienceSection : state.experience,
    skillsSection : state.skills
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setSkills : (skills) => dispatch(setSkills(skills)),
    updateSkills : (skills) => dispatch(updateSkills(skills))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Skills)

