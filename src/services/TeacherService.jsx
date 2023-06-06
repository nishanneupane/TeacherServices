import axios from "axios";

const BASE_URL="teacherservice-production.up.railway.app/api/v1/teacher"
class TeacherService{
    
    addTeacher(Teacher){
        return axios.post(BASE_URL+"/add",Teacher);
    }

    findTeacherById(teacherId){
        return axios.get(BASE_URL+"/"+teacherId);
    }

    findTeacherByName(teacherName){
        return axios.get(BASE_URL+"/name"+teacherName);
    }

    findAllTeacher() {
        return axios.get(BASE_URL + "/").then(res => res.data);
      }      
    updateTeacher(teacher,teacherId){
        return axios.put(BASE_URL+"/update/"+teacherId,teacher);
    }
    deleteTeacher(teacherId){
        return axios.delete(BASE_URL+"/delete/"+teacherId).then(res=>{
            return res;
        });
    }



}
export default new TeacherService();