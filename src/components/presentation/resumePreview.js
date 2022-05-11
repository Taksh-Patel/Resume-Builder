import React from 'react';
import {fieldCd} from './../../constants/typeCodes'

function ResumePreview(props){
    // console.log('Resume Preview');
    const rvContact=(key, valToAppend)=>{
        if(props.contactSection){
          return props.contactSection[key]?props.contactSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    const rvEducation=(key, valToAppend)=>{
        if(props.educationSection){
          return props.educationSection[key]?props.educationSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    const rvExperience=(key, valToAppend)=>{
        if(props.experienceSection){
          return props.experienceSection[key]?props.experienceSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

    const rvSkills=(key, valToAppend)=>{
        if(props.skillsSection){
          return props.skillsSection[key]?props.skillsSection[key] + (valToAppend?valToAppend:'') :'';
        }
        return '';
    }

        return (
            <div>
            
            <div className={props.skinCd + " resume-preview "}>
                <div className={'name-section'}>
                    <p className={'center contact-name text-upper' }> {rvContact(fieldCd.FirstName,' ')  + rvContact(fieldCd.LastName)}  </p>
                    <p className={'center address'}>{rvContact(fieldCd.City,', ') + rvContact(fieldCd.State,', ') +  rvContact(fieldCd.Country,', ') + rvContact(fieldCd.ZipCode,', ')}</p>
                    <p className={'center'}>{rvContact(fieldCd.Email ) }</p>
                    <p className={'center'}>{rvContact(fieldCd.Phone) } </p>
                </div>

                <div className={'profSummSection text-upper'}>                   
                    <p className="heading bold">PROFESSIONAL SUMMARY</p>
                     <div className={'divider'}></div>
                     <p>{rvContact(fieldCd.ProfSummary)}</p>
                </div>

                <div className={'educationSection text-upper'}>                   
                    <p className="heading bold">EDUCATION DETAILS</p>
                     <div className={'divider'}></div>
                     <p>{rvEducation(fieldCd.SchoolName)}</p>
                     <p>{rvEducation(fieldCd.Degree)}</p>
                     <p>{rvEducation(fieldCd.City)}</p>
                     <p>{rvEducation(fieldCd.GraduationCGPA)}</p>
                     <p>{rvEducation(fieldCd.GraduationDate)}</p>
                     <p>{rvEducation(fieldCd.GraduationYear)}</p>
                </div>

                <div className={'educationSection text-upper'}>                   
                    <p className="heading bold">EXPERIENCE DETAILS</p>
                     <div className={'divider'}></div>
                     <p>{rvExperience(fieldCd.CompanyName)}</p>
                     <p>{rvExperience(fieldCd.JobRole)}</p>
                     <p>{rvExperience(fieldCd.Location2)}</p>
                     <p>{rvExperience(fieldCd.StartDate)}</p>
                     <p>{rvExperience(fieldCd.EndDate)}</p>
                     <p>{rvExperience(fieldCd.Desc1)}</p>
                     <p>{rvExperience(fieldCd.Desc2)}</p>
                     <p>{rvExperience(fieldCd.Desc3)}</p>
                     <p>{rvExperience(fieldCd.Desc4)}</p>
                </div>

                <div className={'educationSection text-upper'}>                   
                    <p className="heading bold">SKILL DETAILS</p>
                     <div className={'divider'}></div>
                     <p>{rvSkills(fieldCd.Skill1)}</p>
                     <p>{rvSkills(fieldCd.Skill2)}</p>
                     <p>{rvSkills(fieldCd.Skill3)}</p>
                     <p>{rvSkills(fieldCd.Skill4)}</p>
                     <p>{rvSkills(fieldCd.Skill5)}</p>
                     <p>{rvSkills(fieldCd.Skill6)}</p>
                     <p>{rvSkills(fieldCd.Skill7)}</p>
                     <p>{rvSkills(fieldCd.Skill8)}</p>
                </div>
          
            </div>
            </div>
        )
    }
export default ResumePreview;