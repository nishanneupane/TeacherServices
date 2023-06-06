import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import TeacherService from '../../services/TeacherService'
import "./Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
  const [teacher, setTeacher] = useState([]);
  const [message,setMessage]=useState();

  useEffect(() => {
    init();
  }, []);


  const init = () => {
    TeacherService.findAllTeacher()
      .then(data => {
        setTeacher(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  const deleteTeacher=(teacherId)=>{
    TeacherService.deleteTeacher(teacherId).then(res=>{
      setMessage("Teacher delete sucessfully");
      init();
    }).catch(err=>{
      console.log(err)
    })

  }
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card shadow rounded">
              <div className="card-header fs-3 text-center">All Teacher
              <p>
                {
                  message&& <span className='text-center fs-4 text-success text-sm'>
                    {message}
                  </span>
                }
              </p>
              </div>



              {

                teacher.map((val, index) => (
                  <>
                    <div className="card-body home_background" style={{ display: "flex" ,
                          justifyContent:"space-around",
                          justifyItems:"self-start",
                          alignItems:"center"}}>
                      <Card
                        
                        color="light"
                        style={{
                          width: '28rem'

                        }}
                        className='mx-3'


                      >
                        <img
                          alt="Sample"
                          src="https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"
                        />
                        <CardBody>
                          <CardTitle tag="h5" className='fw-bold'>
                            {val.teacherName}
                          </CardTitle>
                          <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                          >
                            {val.teacherSubject} Teacher
                          </CardSubtitle>
                          <CardText>
                            <p>Joined Date {val.teacherRegisteredTime}</p>
                            <p>Address : {val.teacherAddress}</p>
                          </CardText>
                          <Link className='px-4 bg-warning btn btn-warning'>
                            Edit
                          </Link>
                          <Button className='ms-2 bg-danger' onClick={()=>deleteTeacher(val.teacherId)}>
                            Delete
                          </Button>
                        </CardBody>

                      </Card>

                    </div>
                  </>
                ))
              }



            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default Home