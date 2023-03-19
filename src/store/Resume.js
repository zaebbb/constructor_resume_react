import {makeAutoObservable} from "mobx";

class Resume{
    basicInfo = {name: '', surname: '', patronymic: ''}
    details = {gender: '', birthday: null, city: ''}

    description = ''
    salary = null

    competence = {specialization: '', qualification: '', skills: [], readToMove: false, distanceWork: false}

    // { start: date, end: date, description: '', position: '' }
    workExperience = []

    education = {type: '', institute: '', faculty: '', specialization: '', start: null, end: null, }

    contacts = {phone: '', email: '', socialLinks: []}

    photo = null

    constructor(){
        makeAutoObservable(this)
    }

    setName(name){ this.basicInfo.name = name }
    setSurname(surname){ this.basicInfo.surname = surname }
    setPatronymic(patronymic){ this.basicInfo.patronymic = patronymic }

    setCity(city){ this.details.city = city}
    setBirthday(birthday){ this.details.birthday = birthday}
    setGender(gender){ this.details.gender = gender}

    setDescription(description){ this.description = description}
    setSalary(salary){ this.salary = salary}

    setSpecialization(specialization){ this.competence.specialization = specialization}
    setQualification(qualification){ this.competence.qualification = qualification}
    setSkills(skills){ this.competence.skills = skills}

    setReadToMove(readToMove){ this.competence.readToMove = readToMove }
    setDistanceWork(distanceWork){ this.competence.distanceWork = distanceWork }

    setExperience(experience){ this.workExperience = experience }

    setTypeEducation(type){ this.education.type = type }
    setInstitute(institute){ this.education.institute = institute }
    setFaculty(faculty){ this.education.faculty = faculty }
    setEducationSpecialization(specialization){ this.education.specialization = specialization }
    setEducationStart(start){ this.education.start = start }
    setEducationEnd(end){ this.education.end = end }

    setEmail(email){ this.contacts.email = email }
    setPhone(phone){ this.contacts.phone = phone }
    setSocialLinks(socialLinks){ this.contacts.socialLinks = socialLinks }

    setPhoto(photo){ this.photo = photo }

    isCompleted(){
        if(
            this.basicInfo.name &&
            this.basicInfo.surname &&

            this.details.gender &&
            this.details.birthday &&
            this.details.city &&

            this.description &&
            this.salary &&

            this.competence.specialization &&
            this.competence.qualification &&
            this.competence.skills.length &&

            this.workExperience.length &&

            this.education.type &&
            this.education.institute &&
            this.education.faculty &&
            this.education.specialization &&
            this.education.start &&
            this.education.end &&

            this.contacts.phone &&
            this.contacts.email &&
            this.photo
        ){
            return true
        }

        return false
    }
}

export default new Resume()