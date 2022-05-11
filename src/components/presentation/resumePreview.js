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
        
<svg version="1.1" baseProfile="full" xmlns="http://www.w3.org/2000/svg" width="664" height="858" viewBox="25 20 614 858">

	<text x="0" y="90" class="h1">
		<tspan xmlns="http://www.w3.org/2000/svg" x="45" y="94" className={'bold'}> { rvContact(fieldCd.FirstName,' ')  + rvContact(fieldCd.LastName) } </tspan>
	</text>

	<text x="0" y="92" class="p3">
		<tspan x="45" y="113">{rvContact(fieldCd.City,', ') + rvContact(fieldCd.State,', ') +  rvContact(fieldCd.Country,', ') + rvContact(fieldCd.ZipCode)}</tspan>
	</text>
	
	<rect width="435" height="20" className={'colorFill'} x="36" y="144"/>
	<text x="45" y="158" className={'h2'}> PROFESSIONAL SUMMARY </text>

	<rect width="435" height="20" className={'colorFill'} x="36" y="264"/>
	<text x="45" y="278" className={'h2'}> SKILLS </text>

	<rect width="435" height="20" className={'colorFill'} x="36" y="374"/>
	<text x="45" y="389" className={'h2'}> EXPERIENCE </text>
	
	<g  transform="translate(0 40)">
		<rect width="435" height="20" className={'colorFill'} x="36" y="664"/>
		<text x="45" y="677" className={'h2'}> EDUCATION </text>
	</g>


	<text x="45" y="182" className={'p2'}>{rvContact(fieldCd.ProfSummary)}</text>	

	<circle cx="47" cy="300" r="1.5" className={'li-disc'}></circle>			
	<circle cx="47" cy="314" r="1.5" className={'li-disc'}></circle>			
	<circle cx="47" cy="328" r="1.5" className={'li-disc'}></circle>
	<circle cx="47" cy="342" r="1.5" className={'li-disc'}></circle>

	<text x="62" y="302" className={'p2'}>{rvSkills(fieldCd.Skill1)}</text>
	<text x="62" y="316" className={'p2'}>{rvSkills(fieldCd.Skill2)}</text>
	<text x="62" y="330" className={'p2'}>{rvSkills(fieldCd.Skill3)}</text>
	<text x="62" y="344" className={'p2'}>{rvSkills(fieldCd.Skill4)}</text>

	<circle cx="236" cy="300" r="1.5" className={'li-disc'}></circle>			
	<circle cx="236" cy="314" r="1.5" className={'li-disc'}></circle>			
	<circle cx="236" cy="328" r="1.5" className={'li-disc'}></circle>
	<circle cx="236" cy="342" r="1.5" className={'li-disc'}></circle>

	<text x="251" y="302" className={'p2'}>{rvSkills(fieldCd.Skill5)}</text>
	<text x="251" y="316" className={'p2'}>{rvSkills(fieldCd.Skill6)}</text>
	<text x="251" y="330" className={'p2'}>{rvSkills(fieldCd.Skill7)}</text>
	<text x="251" y="344" className={'p2'}>{rvSkills(fieldCd.Skill8)}</text>

	<text x="45" y="414" className={'subheding'}>{rvExperience(fieldCd.JobRole)}</text>
	<text x="45" y="428" className={'subheding'}>{rvExperience(fieldCd.CompanyName)} | {rvExperience(fieldCd.Location2)}</text>

	<g  transform="translate(0 15)">
		<circle cx="47" cy="428" r="1.5"  className={'li-disc'}></circle>			
		<circle cx="47" cy="442" r="1.5" className={'li-disc'}></circle>			
		<circle cx="47" cy="456" r="1.5" className={'li-disc'}></circle>
		<circle cx="47" cy="470" r="1.5" className={'li-disc'}></circle>

		<text x="46" y="500" className={'p2'}>
			<tspan x="55" y="431">{rvExperience(fieldCd.Desc1)}</tspan>
			<tspan x="55" y="445">{rvExperience(fieldCd.Desc2)}</tspan>
			<tspan x="55" y="459">{rvExperience(fieldCd.Desc3)}</tspan>
			<tspan x="55" y="472">{rvExperience(fieldCd.Desc4)}</tspan>
		</text>
	</g>

	<g  transform="translate(0 40)">
		<text x="47" y="702" className={'subheding'}>{rvEducation(fieldCd.SchoolName,' : ') + rvEducation(fieldCd.Degree)}</text>
		<text x="47" y="716" className={'p2'}>CGPA : {rvEducation(fieldCd.GraduationCGPA)}</text>

		<text x="378" y="380" className={'p2'}>{rvExperience(fieldCd.StartDate) + "-" + rvExperience(fieldCd.EndDate)}</text>
		<text x="378" y="702" className={'p2'}>{rvEducation(fieldCd.GraduationDate,' ') + rvEducation(fieldCd.GraduationYear)} </text>
	</g>

</svg>

           
            </div>
        )
    }
export default ResumePreview;